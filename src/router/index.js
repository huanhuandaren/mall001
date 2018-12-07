import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import mall_index from '@/page/mall/index'
import car_index from '@/page/car/index'
import my_index from '@/page/my/index'
import search from '@/page/mall/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index,
      redirect:"/mall/index",
      children: [
        {
          path: '/mall/index',
          component: mall_index
        },
     
        {
          path: '/my/index',
          component: my_index
        },
      ]
    },
    {
      path: '/car/index',
      component: car_index
    },
    {
      path: '/mall/search',
      component: search
    },
  ]
})
