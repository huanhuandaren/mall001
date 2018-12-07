<template>
  <div class="my_index">
    <van-nav-bar fixed  title="张三"  >
      <img slot="right" src='../../../static/img_icon/Setup.png' @click="setting"  class="set_icon"/>
    </van-nav-bar>

  </div>
</template>

<script>
import { Cell, CellGroup } from 'vant';
export default {
  data () {
    return {
      msg: '我的首页'
    }
  },
  methods:{
    setting(){

    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.my_index{
  .set_icon{
    position: relative;
    top:5px;
  }
 
}
</style>
