<script setup lang="ts">
import { computed, ref } from 'vue'
import sourceData from '@/data.json'
import ExperienceCard from '@/components/ExperienceCard.vue'
const props = defineProps<{
  id: number
}>()

const destinations = ref(sourceData.destinations)

const destination = computed(() => destinations.value.find((d) => d.id === props.id))
</script>

<template>
  <section class="destination">
    <h1>{{ destination.name }}</h1>
    <div class="destination-details">
      <img :src="`/src/assets/images/${destination.image}`" :alt="destination.name" />
      <p>{{ destination.description }}</p>
    </div>
  </section>
  <section class="experiences">
    <h2>Top Experiences in {{ destination.name }}</h2>

    <div class="cards">
      <router-link
        v-for="experience in destination.experiences"
        :key="experience.slug"
        :to="{
          name: 'experience.show',
          params: { id: destination.id, slug: destination.slug, experienceSlug: experience.slug }
        }"
      >
        <ExperienceCard :experience="experience" />
      </router-link>
    </div>
  </section>
</template>

<style></style>
