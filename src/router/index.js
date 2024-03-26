import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/Login/index.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/Register/index.vue')
    },
    {
      path: '/forgetPwd',
      name: 'forgetPwd',
      component: () => import('@/views/ForgetPwd/index.vue')
    },
    {
      path: '/',
      name: 'layout',
      redirect: '/',
      component: () => import('@/views/Layout/index.vue'),
      children: [
        {
          path: '',
          name: 'home',
          meta: { title: '首页', id: 0 },
          component: () => import('@/views/Home/index.vue')
        },
        {
          path: 'market',
          name: 'market',
          meta: { title: '行情', id: 0 },
          component: () => import('@/views/Market/index.vue')
        },
        {
          hide: true,
          path: '/:pathMatch(.*)*',
          component: () => import('@/views/NotFound/index.vue')
        }
      ]
    }
  ]
})

export default router
