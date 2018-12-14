<template>
  <div class="index">
    <router-view/>
    <img src="../../static/img/heng.png" class="tabbar_line"/>
    <van-tabbar v-model="active">
      <van-tabbar-item icon='cart' to='/car/index'>购物车 </van-tabbar-item>
      <van-tabbar-item to='/mall/index'>
        <span>商城</span>
        <img 
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon.mall.active : icon.mall.normal"
        >
      </van-tabbar-item>
      
      <van-tabbar-item to='/my/index'>
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
import icon_Shopping from '../../static/img_icon/icon_Shopping-Mall.png'
import icon_Shopping_active from '../../static/img_icon/icon_mall.png'
import icon_my_active from '../../static/img_icon/icon_mymall.png'
import icon_my from '../../static/img_icon/icon_my.png'
export default {
  data () {
    return {
      active:1,
      icon: {
        mall:{
          normal:icon_Shopping,
          active:icon_Shopping_active
        },
        my:{
          normal:icon_my,
          active:icon_my_active
        },
      }
    }
  },
  methods:{
    getCookie(cname){
      var name = cname + "=";
      var ca = document.cookie.split(';');
      for(var i=0; i<ca.length; i++) 
      {
        var c = ca[i].trim();
        if (c.indexOf(name)==0) return c.substring(name.length,c.length);
      }
      return "";
    },
  },
  mounted(){
    if(this.$route.fullPath=='/my/index'){
      this.active=2;
    }else{
      this.active=1;
    }

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.index{
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
