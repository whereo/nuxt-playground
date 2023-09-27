<template>
  <div class="grid grid-cols-2 gap-4">
    <div
      class="bg-white relative w-full rounded-xl shadow border overflow-hidden transition ease-in-out duration-400 hover:border-indigo-200"
    >
      <div class="w-full p-2 pl-5">
        <div class="align-left tracking-wide text-xs font-semibold">
          Daily List
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
import { onMounted } from "vue";

const { getTodos } = useTodo();

const todos = [
  {
    id: "1",
    title: "Stand Up",
    label: "Hard",
    color: "red",
    checked: true,
  },
  {
    id: "2",
    title: "Brush teeth",
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

onMounted(() => {
  getTodos();
});
</script>
