import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('./views/home.vue'),
  },
  {
    path: '/cookies-policy',
    component: () => import('./views/cookies-policy.vue'),
  },
  {
    path: '/terms-and-conditions',
    component: () => import('./views/terms-and-conditions.vue'),
  },
  {
    path: '/aml',
    component: () => import('./views/aml.vue'),
  },
  {
    path: '/contact-us',
    component: () => import('./views/contact-us.vue'),
  },
  {
    path: '/:catchAll(.*)',
    component: () => import('./views/404.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
