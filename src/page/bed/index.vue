<template>
  <div class="bed_index">

    <van-nav-bar fixed  title='共享陪护床' >
      <img src="../../../static/img_icon/more.png" slot="right" class="more" />
    </van-nav-bar>

    <van-steps  :active="active" active-color="#4FD6BC">
      <van-step>扫码 </van-step>
      <van-step>开锁</van-step>
      <van-step>支付</van-step>
    </van-steps>

    <saoma_comp name='saoma' ></saoma_comp>
  
  </div>
</template>

<script>
import { Cell, CellGroup } from 'vant';
import saoma_comp from '../../components/saoma'
export default {
   components:{
    saoma_comp
  },
  data () {
    return {
      active:1,
    }
  },
  methods:{

  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.bed_index{
  .van-nav-bar{
    background-color: #4FD6BC;
    color:white;
    .more{
      height: 20px;width: 20px;
      position: relative;
      top:5px;
    }
  }
  .van-steps{
    margin-top: 60px;
    .van-steps__items .van-steps__items--alone{
      height: 70px!important;
    }
    .van-step__title{
      position: relative;
      top:50px;
    }
  }
 
}
</style>
