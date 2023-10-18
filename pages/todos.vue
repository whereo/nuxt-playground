<template>
  <div class="grid grid-cols-2 gap-4">
    <div
      class="bg-white relative w-full rounded-xl shadow border overflow-hidden transition ease-in-out duration-400 hover:border-indigo-200"
    >
      <div class="w-full p-2 pl-5">
        <div class="align-left tracking-wide text-xs font-semibold">
          Daily List <template v-if="pending">loading....</template>
        </div>
      </div>
      <div class="relative p-4 pt-0">
        <div class="w-full">
          <TodoItem
            v-for="todo in todos"
            :id="todo.id"
            :title="todo.title"
            :label="todo.label"
            :color="todo.color"
            :checked="todo.checked"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { getTodos } = useTodo();

const todos = ref<Todo[]>([]);
const pending = ref(true);

onMounted(async () => {
  const { data, pending } = await getTodos();

  todos.value = data.value;
  pending.value = pending.value;
});
</script>
