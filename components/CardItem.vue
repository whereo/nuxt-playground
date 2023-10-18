<template>
  <div
    class="animated-feature-cards relative w-full bg-white rounded-xl shadow hover:shadow-md border bg-gradient-to-br from-neutral-50 from-40% to-indigo-100/70 overflow-hidden transition ease-in-out duration-400 hover:border-indigo-200"
  >
    <div class="relative mx-10 my-10 min-h-[400px]">
      <div class="flex w-4/6 flex-col gap-3">
        <h2 class="text-xl font-bold tracking-tight md:text-xl">Track Todos</h2>
        <p class="text-sm leading-5 text-zinc-600 sm:text-base sm:leading-7">
          Ensure to always know what to do next. Mark tasks as done to never
          loose the overview.
        </p>
      </div>
      <div
        class="absolute inset-0 top-[50%] lg:top-[70%] flex flex-col items-center justify-center max-md:scale-110 md:top-[38%]"
      >
        <div class="flex w-[65%] lg:w-[90%] p-2 pl-3 justify-between">
          <div class="align-left tracking-wide text-xs font-semibold">
            Daily List
          </div>
        </div>
        <div class="flex w-[65%] lg:w-[90%] flex-col">
          <TodoItem
            v-for="todo in todos"
            :id="todo.id"
            :title="todo.title"
            :description="todo.description"
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
const todos = [
  {
    id: "1",
    title: "Stand Up",
    label: "Hard",
    description: "Basically impossible",
    color: "red",
    checked: true,
  },
  {
    id: "2",
    title: "Brush teeth",
    description: "Can be fun",
    label: "Medium",
    color: "yellow",
    checked: true,
  },
  {
    id: "3",
    title: "Do sports",
    label: "Extreme",
    color: "violet",
    checked: false,
  },
  {
    id: "4",
    title: "Breakfast",
    description: "Cereals are best!",
    label: "Super easy",
    color: "blue",
    checked: false,
  },
  {
    id: "5",
    title: "Start working",
    label: "Easy",
    color: "green",
    checked: false,
  },
];
</script>

<style scoped>
.animated-feature-cards:before {
  background: radial-gradient(
    1000px circle at var(--x) var(--y),
    red 0,
    blue 25% /*#3aecf8 0,
    #5295dc 25%,*/ hsla(0, 0%, 100%, 0) 50%,
    transparent 80%
  );
  z-index: -1;
  content: "";
  inset: -1px;
}
</style>
