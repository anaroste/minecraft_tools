import { createRouter, createWebHistory } from 'vue-router'

import { Coordinates } from '@/pages'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Coordinates',
      component: Coordinates,
    },
  ],
})

export default router
