<template>
  <div class="setting">
    <van-nav-bar fixed
      title="个人资料"
      right-text="保存"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />

    <van-cell-group>
      
      <van-cell title="个人头像" is-link center>
        <span slot='right-icon'>
          <img  src="../../../static/img_icon/face.png" />
          <van-icon name="arrow"  class="jiant"/>
        </span>
      </van-cell>
      <van-cell title="账号" value='15355654212'  />
      <van-cell title="手机号" value='15355654212' is-link />
      <van-cell title="姓名" value='张三'  />
      <van-cell title="昵称" value='水电费三等奖就付款'  />
      <van-cell title="性别"  center>
        <van-radio-group v-model="radio" slot='right-icon'>
          <van-radio name="1">男</van-radio>
          <van-radio name="2">女</van-radio>
        </van-radio-group>
      </van-cell>
    </van-cell-group>

    
  </div>
</template>

<script>
export default {
  data () {
    return {
      radio:1,
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
  .van-radio-group{
    display: flex;
    .van-radio{
      margin-left: 15px;
    }
  }
  .jiant{
    position: relative;
    bottom: 18px;
    margin-left: 5px;
    color: #969799;
  }
  padding-top: 46px;
  background-color: #eeeeee;
}
</style>
