<template>
  <div class="index">
    <router-view/>
    <van-tabbar v-model="active">
      <van-tabbar-item to='/ehaot/index'>
        <span>E号通</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon.e.active : icon.e.normal"
        >
      </van-tabbar-item>
      <van-tabbar-item to='/bed/index'>
        <span>陪护床</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon.bed.active : icon.bed.normal"
        >
      </van-tabbar-item>
      <van-tabbar-item icon="shop" to='/mall/index'>商城</van-tabbar-item>
      <van-tabbar-item icon="contact" to='/my/index'>我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import e_icon from '../../static/img_icon/E_grey.png'
import e_icon_active from '../../static/img_icon/E_green.png'
import bed_icon from '../../static/img_icon/greybed.png'
import bed_icon_active from '../../static/img_icon/bed.png'

export default {
  data () {
    return {
      active:0,
      icon: {
        e:{
          normal: e_icon,
          active: e_icon_active
        },
        bed:{
          normal: bed_icon,
          active: bed_icon_active
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.index{
  .van-tabbar-item--active{
    color:#4FD6BC;
  }
  .van-tabbar-item__icon img{
    width: 18px;height: 18px;
  }
}
</style>
