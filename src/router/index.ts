import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/destination/:id/:slug',
    name: 'destination.show',
    component: () => import('@/views/DestinationShow.vue'),
    props: (route: { params: { id: string } }) => ({ id: parseInt(route.params.id) }),
  },
  {
    path: '/destination/:id/:slug/:experienceSlug',
    name: 'experience.show',
    component: () => import('@/views/ExperienceShow.vue'),
    props: (route: { params: { id: string; experienceSlug: string } }) => ({
      id: parseInt(route.params.id),
      experienceSlug: route.params.experienceSlug
    })
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
