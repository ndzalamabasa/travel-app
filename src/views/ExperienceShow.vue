<script setup lang="ts">
import { computed, ref } from 'vue'
import sourceData from '@/data.json'
import ExperienceCard from '@/components/ExperienceCard.vue'
const props = defineProps<{
  id: number
  experienceSlug: string
}>()

const destinations = ref(sourceData.destinations)

const destination = computed(() => destinations.value.find((d) => d.id === props.id))

const experience = computed(() =>
  destination.value.experiences.find((e) => e.slug === props.experienceSlug)
)
</script>

<template>
  <section class="experience-details">
    <h1>{{ experience.name }}</h1>
    <div class="experience-details">
      <img :src="`/src/assets/images/${experience.image}`" :alt="experience.name" />
      <p>{{ experience.description }}</p>
    </div>
  </section>
  <section class="experiences">
    <h2>Top Experiences in {{ destination.name }}</h2>

    <div class="cards">
      <ExperienceCard
        v-for="experience in destination.experiences"
        :key="experience.slug"
        :experience="experience"
      />
    </div>
  </section>
</template>

<style></style>
