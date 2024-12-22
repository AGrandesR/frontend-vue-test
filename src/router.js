import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'

import ListView from './views/ListView.vue'
import UserView from './views/UserView.vue'

const routes = [
  { path: '/', component: ListView },
  { path: '/user/:id', component: UserView },
]

const router = createRouter({
  history: createWebHistory('/your-github-repo/'),
  routes,
})

export default router