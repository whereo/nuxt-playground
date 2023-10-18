<script setup lang="ts">
const supabase = useSupabaseClient();
const email = ref("");

const signInWithOtp = async () => {
  const { error } = await supabase.auth.signInWithOtp({
    email: email.value,
    options: {
      emailRedirectTo: "https://2mlzrw-3000.csb.app/confirm",
    },
  });
  if (error) console.log(error);
};
</script>
<template>
  <form @submit.prevent="signInWithOtp">
    <input v-model="email" type="email" class="border border-gray-200 p-2" />
    <button class="bg-blue-400 rounded p-2" type="submit">
      Sign In with E-Mail
    </button>
  </form>
</template>
