<template>
  <div class="grid gap-4">
    <Stats />

    <div class="grid xl:grid-cols-2 2xl:grid-cols-4 gap-5">
      <CardItem />
      <CardItem />
      <CardItem />
    </div>
  </div>
</template>

<script setup>
import Stats from "../components/Stats.vue";
</script>
