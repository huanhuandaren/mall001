<template>
  <div class="index_wapper">
    <van-swipe :autoplay="3000" class="swiper">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { Cell, CellGroup } from 'vant';
export default {
  data () {
    return {
       images: [
        'https://img.yzcdn.cn/1.jpg',
        'https://img.yzcdn.cn/2.jpg'
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.index_wapper{
  .swiper{
   
  }
}
</style>
