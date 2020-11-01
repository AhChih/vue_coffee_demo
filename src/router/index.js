import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'Login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/home',
      name: '首頁',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/coupon',
      name: '優惠卷',
      component: () => import('../views/Coupon.vue')
    }
  ]
})
