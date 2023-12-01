<template>
  <div class="relative overflow-y w-auto">
    <div class="relative bg-white shadow">
      <div v-for="row in 5" class="flex border-b">
        <div v-for="n in cols" class="w-[50px] h-[50px] block border-r p-4">
          {{ n }}
        </div>
      </div>

      <div
        v-for="el in elements"
        :ref="createRef(el)"
        class="absolute rounded cursor-grab flex items-center"
        style="background: rgba(255, 0, 255, 0.7); height: 50px"
        :style="el.styles"
        @click="el.moveLeft()"
      >
        <aside style="background: rgba(0, 0, 0, 0.3)">&lt;</aside>
        <div class="px-2 py-">{{ el.text }}</div>
        <aside style="background: rgba(0, 0, 0, 0.3)">&gt;</aside>
      </div>
    </div>
  </div>
  {{ refs }}
</template>

<script setup>
import { ref } from "vue";

const cols = 20;

const data = [
  {
    id: "first-element-id",
    top: 0,
    left: 0,
    width: 100,
    text: "hello world",
  },
];

const createElement = (el) => {
  return {
    id: el.id,
    s: ref({
      top: el.top,
      left: el.left,
      width: el.width,
    }),
    styles: {
      top: `${this.s.value.top}px`,
      left: `${this.s.value.left}px`,
      width: `${this.s.value.width}px`,
    },
    text: el.text,
    moveLeft() {
      this.s.left += 50;
    },
  };
};

// const elements = data.map((d) => createElement(d));
const elements = data;

const refs = ref({});
const createRef = (el) => {
  if (refs.value[el.id] === undefined) {
    refs.value[el.id] = el;
  }
};

const onMouseDown = (el) => {
  console.log(el);
};
</script>
