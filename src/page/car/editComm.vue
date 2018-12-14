<template>
  <div class="editComm">
    <van-nav-bar  left-arrow fixed  @click-left="onClickLeft" title="发表评价" right-text="发布" @click-right="onClickRight"/>
    <div class="prod_ms">
      <div class="left_ms">
        <img src='../../../static/img/shancun.png'/>
        <span>描述相符</span>
        <van-rate v-model="value"  color="#e95c4d" />
      </div>
      <div class="manyi">非常满意</div>
    </div>

    <van-cell-group>
      <van-field
        v-model="message"
        type="textarea"
        placeholder="宝贝满足您的期望吗？说说您的使用心得，分享给想买的他们把！"
        rows="7"
      />
      <van-uploader :after-read="onRead" accept="image/gif, image/jpeg" multiple>
        <span v-for='src in imgs12' :key='src'>
          <img :src="src"/>
          <van-icon name="clear" color='red'/>
        </span>
        <img src="../../../static/img/icon_fbxq_addpicture_mallmdpi.png"/>
      </van-uploader>
    </van-cell-group>

  </div>
  
</template>

<script>
import comm_img from '../../../static/img/shancun.png'
export default {
  data () {
    return {
      value:4,
      message:'',
      imgs12:[comm_img,comm_img,comm_img]
    }
  },
  methods:{
    onRead(file,content) {
      debugger
      console.log(file)
    },
    onClickLeft(){
      this.$router.go(-1);
    },
    onClickRight(){

    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.editComm{
  .van-hairline--top-bottom::after,.van-cell:not(:last-child)::after{
    border:none!important;
  }
  .van-uploader{
    padding: 0 15px;
    img{
      height: 50px;width:50px;
    }
    .van-icon{
      position: relative;
      bottom: 40px;
      left: -10px;
    } 
  }
  .prod_ms{
    font-size: 14px;
    padding: 10px 15px;
    display: flex;
    justify-content: space-between;
    background-color: white;
    .left_ms{
      display: flex;
      img{
        height: 50px;width:50px;
      }
      span{
        margin: auto 10px;
      }
      .van-rate{
        position: relative;
        top:15px;
      }
    }
    .manyi{
      line-height: 50px;
    }
  }

  padding-top: 46px;
  background-color: #eeeeee;
}
</style>
