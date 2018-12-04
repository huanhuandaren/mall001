import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import mall_index from '@/page/mall/index'
import ehaot_index from '@/page/ehaot/index'
import bed_index from '@/page/bed/index'
import my_index from '@/page/my/index'
import index_wapper from '@/page/mall/index_wapper'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index,
      redirect:"/ehaot/index",
      children: [
        {
          path: '/ehaot/index',
          component: ehaot_index
        },
        {
          path: '/bed/index',
          component: bed_index
        },
        {
          path: '/my/index',
          component: my_index
        },
      ]
    },
    {
      path: '/mall/index',
      component: mall_index,
      redirect:"/mall/index_wapper",
      children: [
        {
          path: '/mall/index_wapper',
          component: index_wapper
        },
      ]
    },
  ]
})
