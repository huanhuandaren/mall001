<template>
  <div class="index_wapper">
    <van-nav-bar fixed border="false"
      left-text="返回" 
      left-arrow
      @click-left="back" 
    >
      <van-search placeholder="请输入搜索关键词" v-model="search_value" slot="title" background='rgba(0, 0, 0, 0)' >
        <van-icon name="search" slot="left-icon" color='white' size='20px'/>
      </van-search>
      <van-icon name="chat" slot="right" color='black' size='20px'/>
    </van-nav-bar>

    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(image, index) in banner_images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    

  </div>
</template>

<script>
import banner from '../../../static/img/banner.png'
import banner1 from '../../../static/img/banner1.png'
import { Cell, CellGroup } from 'vant';

export default {
 
  data () {
    return {
       banner_images: [
        banner,banner1
      ],
      search_value:'',
      
    }
  },
  methods:{
    back: function () {
      history.back();
    },
    onSearch:function(val){
      debugger
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.index_wapper{
  .van-nav-bar{
    background-color: rgba(0, 0, 0, 0);
    .van-cell,input{
      background-color: rgba(0, 0, 0, 0.3)!important;
    }
  }
}

</style>
