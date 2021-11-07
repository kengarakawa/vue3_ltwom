import { createRouter, createWebHistory } from 'vue-router'

import TuneUps from '@/views/TuneUps.vue'
const routes = [
  {
    path: '/',
    name: 'TuneUps',
    component: TuneUps
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
