import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/pages/discounts')
  },
  {
    path: '/discounts',
    name: 'Discounts',
    component: () => import('@/pages/discounts')
  },
  {
    path: '/store',
    name: 'Store',
    component: () => import('@/pages/store')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/pages/profile')
  },
  {
    path: '/login',
    component: () => import('@/pages/login')
  },
  {
    path: '/register',
    component: () => import('@/pages/login/register.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
