import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'

import ListView from './views/ListView.vue'
import UserView from './views/UserView.vue'

const routes = [
  { path: '/', component: ListView },
  { path: '/user/:id', component: UserView },
  { path: '/:pathMatch(.*)*', component: ListView },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router