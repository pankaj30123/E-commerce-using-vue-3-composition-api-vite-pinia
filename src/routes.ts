import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/HomeView.vue'
import Product from './pages/ProductView.vue'
import Cart from './pages/CartView.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/product/:productId', component: Product },
  { path: '/cart', component: Cart },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
