// https://nuxt.com/docs/guide/directory-structure/nuxt.config
export default defineNuxtConfig({
  telemetry: false,
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/supabase", "@vueuse/nuxt"],
  supabase: {
    redirectOptions: {
      login: "/login",
      callback: "/confirm",
      exclude: ["/", "/about", "/gantt"],
    },
  },
});
