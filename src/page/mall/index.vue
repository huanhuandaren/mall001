<template>
  <div class="mall_index">
    <router-view/>
    <img src="../../../static/img/heng.png" class="tabbar_line"/>
    <van-tabbar v-model="active">
      <van-tabbar-item  icon='wap-home' to='/mall/index_wapper'>首页 </van-tabbar-item>
      <van-tabbar-item>
        <span>分类</span>
        <img 
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon.type.active : icon.type.normal"
        >
      </van-tabbar-item>
      <van-tabbar-item icon='cart'>购物车 </van-tabbar-item>
      <van-tabbar-item>
        <span>我的</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon.my.active : icon.my.normal"
        >
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import type_icon from '../../../static/img_icon/icon_classification.png'
import type_icon_active from '../../../static/img_icon/icon_classificationmall.png'
import icon_my_active from '../../../static/img_icon/icon_mymall.png'
import icon_my from '../../../static/img_icon/icon_my.png'
export default {
  data () {
    return {
      active:0,
      icon: {
        type:{
          normal:type_icon,
          active:type_icon_active
        },
        my:{
          normal:icon_my,
          active:icon_my_active
        },
      }
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
  .tabbar_line{
    width: 100%;
    position: fixed;
    bottom: 50px;
  }
}
</style>
