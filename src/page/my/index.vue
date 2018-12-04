<template>
  <div class="my_index">
    <h1>{{ msg }}</h1>

  </div>
</template>

<script>
import { Cell, CellGroup } from 'vant';
export default {
  data () {
    return {
      msg: '我的首页'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.my_index{
 
}
</style>
