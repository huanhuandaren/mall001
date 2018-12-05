<template>
  <div class="indexSaoma">
    <div class="saoma">
        <div class="saomaBegin qr">
          <img src="../../static/img/Sweeptheyard.png"  class="more" />
          <div class="begingText">扫码开始</div>
        </div>
        <div class="saomaBegin">
          <img src="../../static/img/Theinput.png"  class="more" />
          <div class="begingText">输入编码开锁</div>
      </div>
    </div>
      <div class="pleaseSelect">
        <p class="pleaseText">请选择开锁方式</p>
        <p class="tip">提示:未在医院工作时间内不能成功开锁</p>
      </div>
      
  </div>
</template>

<script>
export default {
  name:"saoma",
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.indexSaoma{
  .saoma{
    width: 33%;
    margin: 10% auto;
    .qr{
        margin-bottom: 40%;
    }
    .saomaBegin img{
      width: 100%;
      height: 100%;
    }
    .begingText{
      text-align: center;
      width: 100%;
      color: #4FD6BC;
          padding-top: 5px;
    }
  }
  .pleaseSelect{
    width: 100%;
    position: fixed;
    text-align: center;
    font-size:12px; 
    bottom: 72px;
    left: 0;
    p{
      margin: 0;
    }
    .pleaseText{
      color: #4FD6BC;
      line-height: 25px;
    }
    .tip{
      color: #ccc;
    }
  }
}
</style>
