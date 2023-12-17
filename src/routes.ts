import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/HomeView.vue'
import Product from './pages/ProductView.vue'
import Cart from './pages/CartView.vue'
import Login from './User/LoginPage.vue'
import Register from './User/RegisterPage.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/product/:productId', component: Product },
  { path: '/cart', component: Cart },
  { path: '/login', component: Login},
  { path: '/Register', component: Register },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
