<template>
  <div class="mall_index">
    <router-view/>
    <van-tabbar v-model="active">
      <van-tabbar-item  icon='wap-home' to='/mall/index_wapper'>首页 </van-tabbar-item>
      <van-tabbar-item>
        <span>分类</span>
        <img 
          slot="icon"
          :src="icon.type_icon"
        >
      </van-tabbar-item>
      <van-tabbar-item>
        <span>商城</span>
        <img
          slot="icon"
          :src="icon.Shopping_icon"
        >
      </van-tabbar-item>
      <van-tabbar-item icon='cart'>购物车 </van-tabbar-item>
      <van-tabbar-item>
        <span>我的</span>
        <img
          slot="icon"
          :src="icon.my_icon"
        >
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import type_icon from '../../../static/img_icon/icon_classification.png'
import Shopping_icon from '../../../static/img_icon/icon_Shopping-Mall.png'
import icon_my from '../../../static/img_icon/icon_my.png'
export default {
  data () {
    return {
      active:0,
      icon: {type_icon:type_icon,Shopping_icon:Shopping_icon,my_icon:icon_my}
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.mall_index{
  .van-tabbar-item--active{
    color:#30BBEE;
  }
}
</style>
