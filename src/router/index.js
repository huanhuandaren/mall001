import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import mall_index from '@/page/mall/index'
import car_index from '@/page/car/index'
import my_index from '@/page/my/index'
import search from '@/page/mall/search'
import prodDetail from '@/page/mall/prodDetail'
import sureOrder from '@/page/mall/sureOrder'
import address from '@/page/my/address'
import editAddress from '@/page/my/editAddress'
import myOrder from '@/page/my/myOrder'
import orderDetail from '@/page/mall/orderDetail'
import mark from '@/page/my/mark'
import comme from '@/page/car/comme'
import editComm from '@/page/car/editComm'
import setting from '@/page/my/setting'
import myInfo from '@/page/my/myInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/my/myInfo',
      name:"myInfo",
      component: myInfo
    },
    {
      path: '/my/setting',
      name:"setting",
      component: setting
    },
    {
      path: '/car/editComm',
      name:"editComm",
      component: editComm
    },
    {
      path: '/car/comme',
      name:"comme",
      component: comme
    },
    {
      path: '/my/mark',
      name:"mark",
      component: mark
    },
    {
      path: '/mall/orderDetail',
      name:"orderDetail",
      component: orderDetail
    },
    {
      path: '/my/myOrder',
      name:"myOrder",
      component: myOrder
    },
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
      name:"car",
      component: car_index
    },
    {
      path: '/mall/search',
      component: search
    },
    {
      path: '/mall/prodDetail',
      name:'prodDetail',
      component: prodDetail
    },
    {
      path: '/mall/sureOrder',
      name:'sureOrder',
      component: sureOrder
    },
    {
      path: '/my/address',
      name:'address',
      component: address
    },
    {
      path: '/my/editAddress',
      name:'editAddress',
      component: editAddress
    },
  ]
})
