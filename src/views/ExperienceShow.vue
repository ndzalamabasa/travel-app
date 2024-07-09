<script setup lang="ts">
import { computed, ref } from 'vue'
import sourceData from '@/data.json'
const props = defineProps<{
  id: number
  experienceSlug: string
}>()

const destinations = ref(sourceData.destinations)

const destination = computed(() => destinations.value.find((d) => d.id === props.id))

const experience = computed(() =>
  destination.value?.experiences.find((e) => e.slug === props.experienceSlug)
)
</script>

<template>
  <section>
    <h1>{{ experience?.name }}</h1>
    <div>
      <img :src="`/src/assets/images/${experience?.image}`" :alt="experience?.name" />
      <p>{{ experience?.description }}</p>
    </div>
  </section>
</template>

<style></style>
