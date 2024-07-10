import { createRouter, createWebHistory } from 'vue-router'

import { Coordinates, Tmp } from '@/pages'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Coordinates',
      component: Coordinates,
    },
    {
      path: '/tmp',
      name: 'Tmp',
      component: Tmp,
    },
  ],
})

export default router
