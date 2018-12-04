<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <van-cell-group class="cell-group">
      <van-cell title="单元格" value="内容" />
      <van-cell title="单元格" value="内容" label="描述信息" />
    </van-cell-group>

  </div>
</template>

<script>
import { Cell, CellGroup } from 'vant';
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.hello{
  .cell-group{
    margin-top: 1000px;
  }
}
</style>
