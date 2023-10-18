<template>
  <div class="h-full flex flex-col">
    <div class="flex flex-col flex-grow justify-end space-y-2 pb-4">
      <!-- <div class="flex justify-start">
        <div class="inline-block bg-white rounded-md shadow-md p-2">
          message incoming
        </div>
      </div> -->
      <template v-if="user">
        <div
          v-for="message in messages"
          class="flex"
          :class="{
            'justify-end': user.id === message.profiles.id,
          }"
        >
          <div class="inline-block bg-indigo-200 rounded-md shadow-md p-2">
            {{ message.content }}
          </div>
        </div>
      </template>
    </div>
    <form
      @submit.prevent="onSubmit"
      class="flex justify-between gap-2 block w-full rounded-md bg-white shadow-md border border-gray-2000"
    >
      <input
        type="text"
        name="message"
        id="message"
        v-model="message"
        class="block w-full rounded-md border-0 outline-0 p-2 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
        placeholder="Message..."
      />

      <button type="submit" class="p-2 hover:text-indigo-700 duration-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
          />
        </svg>
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient();
const user = useSupabaseUser();

type Message = {
  id: number;
  content: string;
  created_at: string;
  profiles: {
    id: string;
    first_name: string;
  };
};

const message = ref("");
const messages = ref<Message[]>([]);

const onSubmit = async () => {
  if (!message.value) return;

  if (!user.value) return;

  const { error } = await supabase
    .from("messages")
    .insert({ user_id: user.value.id, content: message.value });
};

const getMessages = async () => {
  const { data } = await useAsyncData("messages", async () => {
    const { data } = await supabase.from("messages").select(`
      id,
      content,
      created_at,
      profiles(id, first_name)
    `);
    return data as Message[];
  });

  if (data.value === null) return;

  messages.value = data.value;
};

const subscribeToNewMessages = () => {
  const channel = supabase
    .channel("schema-db-changes")
    .on(
      "postgres_changes",
      {
        event: "INSERT",
        schema: "public",
        table: "messages",
      },
      (payload) => {
        messages.value.push(payload.new);
      },
    )
    .subscribe();
};

onMounted(() => {
  getMessages();
  subscribeToNewMessages();
});
</script>
