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
    props: (route: { params: { id: string } }) => ({ id: parseInt(route.params.id) })
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
