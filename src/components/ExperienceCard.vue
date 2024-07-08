<script setup lang="ts">
defineProps<{
  experience: Record<string, any>
}>()
</script>

<template>
  <div class="card">
    <img :src="`/src/assets/images/${experience.image}`" :alt="experience.name" />
    <span class="card__text">{{ experience.name }}</span>
  </div>
</template>

<style></style>
