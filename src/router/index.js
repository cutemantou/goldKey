import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: () =>import('@/page/home/index'),
    },
    {
      path: '/home',
      name: '首页',
      component: () =>import('@/page/home/index'),
    },
    {
      path: '/dataCenter',
      name: '数据中心',
      component: () =>
      import('@/page/dataCenter/index'),
    },
    {
      path: '/onlineBuyCard',
      name: '在线购卡',
      component: () =>
      import('@/page/onlineBuyCard/index'),
    }
   
  ]
})
