<template>
  <label :for="id" class="flex cursor-pointer flex-col items-center pt-2"
    ><div
      class="flex w-full items-center justify-between gap-3 overflow-hidden rounded-lg bg-gradient-to-r from-white from-70% to-100% p-4 py-2 text-black/90 duration-300 duration-75 ring-1 ring-gray-200 overflow-hidden"
      :class="[colors.gradient, colors.ring]"
    >
      <div class="relative flex flex-row items-center gap-3">
        <div class="relative h-5 w-5">
          <input
            class="peer absolute appearance-none"
            :id="id"
            type="checkbox"
            v-model="checkState"
          />
          <div
            class="h-5 w-5 rounded-full border border-black/70 bg-black/10 duration-75 peer-checked:border-transparent"
            :class="colors.checked"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="absolute top-1 left-1 my-auto h-3 w-3 scale-0 stroke-[4] text-white duration-300 peer-checked:scale-100"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <div class="inline-block">
          <div
            :class="{
              'py-2': !description,
            }"
          >
            {{ title }}
          </div>
          <div class="text-xs text-zinc-500">{{ description }}</div>
        </div>
      </div>
      <div class="hidden md:block">
        <div
          class="inline-flex rounded-full font-semibold px-2.5 py-0.5 text-xs text-white uppercase"
          :class="colors.pill"
        >
          {{ label }}
        </div>
      </div>
    </div>
  </label>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

const props = defineProps<{
  id: string;
  color: "blue" | "green" | "red" | "yellow" | "violet";
  title: string;
  description?: string;
  label: string;
  checked: boolean;
}>();

const checkState = ref(props.checked);

const colors = computed(() => {
  const settings = {
    blue: {
      gradient: `to-blue-500/10`,
      checked: `peer-checked:bg-blue-500/80`,
      pill: `bg-blue-500/80`,
      ring: `hover:ring-blue-500/40 focus-within:ring-blue-500`,
    },
    green: {
      gradient: `to-green-500/10`,
      checked: `peer-checked:bg-green-500/80`,
      pill: `bg-green-500/80`,
      ring: `hover:ring-green-500/40 focus-within:ring-green-500`,
    },
    yellow: {
      gradient: `to-yellow-500/10`,
      checked: `peer-checked:bg-yellow-500/80`,
      pill: `bg-yellow-500/80`,
      ring: `hover:ring-yellow-500/40 focus-within:ring-yellow-500`,
    },
    red: {
      gradient: `to-red-500/10`,
      checked: `peer-checked:bg-red-500/80`,
      pill: `bg-red-500/80`,
      ring: `hover:ring-red-500/40 focus-within:ring-red-500`,
    },
    violet: {
      gradient: `to-violet-500/10`,
      checked: `peer-checked:bg-violet-500/80`,
      pill: `bg-violet-500/80`,
      ring: `hover:ring-violet-500/40 focus-within:ring-violet-500`,
    },
  };

  return settings[props.color];
});
</script>
