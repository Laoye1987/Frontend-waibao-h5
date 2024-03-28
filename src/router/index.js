import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      meta: { title: '登录' },
      component: () => import('@/views/Login/index.vue')
    },
    {
      path: '/register',
      name: 'register',
      meta: { title: '注册' },
      component: () => import('@/views/Register/index.vue')
    },
    {
      path: '/forgetPwd',
      name: 'forgetPwd',
      meta: { title: '修改密码' },
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
          meta: { title: '首页' },
          component: () => import('@/views/Home/index.vue')
        },
        {
          path: 'market',
          name: 'market',
          meta: { title: '行情' },
          component: () => import('@/views/Market/index.vue')
        },
        {
          path: 'position',
          name: 'position',
          meta: { title: '持仓' },
          component: () => import('@/views/Position/index.vue')
        },
        {
          path: 'news',
          name: 'news',
          meta: { title: '新闻' },
          component: () => import('@/views/News/index.vue')
        },
        {
          path: 'user',
          name: 'user',
          meta: { title: '我的' },
          component: () => import('@/views/User/index.vue')
        },
        {
          hide: true,
          path: '/:pathMatch(.*)*',
          component: () => import('@/views/NotFound/index.vue')
        }
      ]
    },
    // 公用页面
    {
      path: '/customer',
      name: 'customer',
      meta: { title: '线上客服' },
      component: () => import('@/views/Customer/index.vue')
    },
    {
      path: '/echartDetails',
      name: 'echartDetails',
      meta: { title: 'token详情' },
      component: () => import('@/views/EchartDetails/index.vue')
    },
    // 个人页面
    {
      path: '/realName',
      name: 'realName',
      meta: { title: '实名认证' },
      component: () => import('@/views/User/views/realName/index.vue')
    },
    {
      path: '/changePwd',
      name: 'changePwd',
      meta: { title: '修改密码' },
      component: () => import('@/views/User/views/changePwd/index.vue')
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      meta: { title: '关于我们' },
      component: () => import('@/views/User/views/aboutUs/index.vue')
    },
    {
      path: '/wallet',
      name: 'wallet',
      meta: { title: '钱包' },
      component: () => import('@/views/User/views/wallet/index.vue')
    },
    {
      path: '/edit',
      name: 'edit',
      meta: { title: '编辑' },
      component: () => import('@/views/User/views/edit/index.vue')
    },
    {
      path: '/addWallet',
      name: 'addWallet',
      meta: { title: '新钱包' },
      component: () => import('@/views/User/views/addWallet/index.vue')
    },
    // 首页页面
    {
      path: '/notice',
      name: 'notice',
      meta: { title: '通知' },
      component: () => import('@/views/Home/views/Notice/index.vue')
    },
    {
      path: '/out',
      name: 'out',
      meta: { title: '出金' },
      component: () => import('@/views/Home/views/Out/index.vue')
    },
    {
      path: '/enter',
      name: 'enter',
      meta: { title: '入金' },
      component: () => import('@/views/Home/views/Enter/index.vue')
    },
    {
      path: '/fundsDetails',
      name: 'fundsDetails',
      meta: { title: '出金入金详情' },
      component: () => import('@/views/Home/views/Details/index.vue')
    }
  ]
})
// 路由守卫 前
router.beforeEach((to, from, next) => {
  // 获取当前路径
  const currentPath = to.path
  const token = localStorage.getItem('token')
  //有token 或者 array下的路径都可以进
  if (token || ['/login', '/register', '/forgetPwd'].includes(currentPath)) {
    next()
  } else {
    next('/login')
  }
})
export default router
