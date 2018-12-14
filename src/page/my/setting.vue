<template>
  <div class="setting">
    <van-nav-bar fixed
      title="设置"
      left-arrow
      @click-left="onClickLeft"
    />

    <van-cell-group>
      
      <van-cell title="地址管理" is-link :to='{name:"address"}'  />
      <van-cell title="修改密码" is-link  />
    </van-cell-group>

    <div class="exit_btn">退出登录</div>

  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods:{

    onClickLeft(){
      this.$router.go(-1);
    },
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.setting{
  .exit_btn{
    padding: 15px 10px;
    background-color: #fff;
    margin: 5px 0;
    text-align: center;
    color:#1989fa;
  }
  padding-top: 46px;
  background-color: #eeeeee;
}
</style>
