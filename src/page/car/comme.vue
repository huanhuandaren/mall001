<template>
  <div class="comme">
    <van-nav-bar  left-arrow fixed  @click-left="onClickLeft">
      <img src='../../../static/img/shancun.png' slot="title" />
    </van-nav-bar>

    <van-tabs type="card" sticky>
      <van-tab title="全部">

        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
          >
          <div  v-for="item in list" :key='item' class="commAll comm_div">
            <div class="comm_cont" >
              <div ><img src='../../../static/img_icon/icon_mymall.png' class="head_C"/>157****1236</div>
              <div><van-rate v-model="rateValue" readonly size='15' color="#e95c4d"/></div>
            </div>
            <div class="comm_time"> 2018-12-12 12:45:12 </div>
            <div class="commt_txt">非常满意！下次回购</div>
            <div class="commt_pic">
              <div v-for='(src,index) in imgs22' :key='index'>
                <img :src='src' @click="showImagePreview(index)"/>
              </div>
            </div>
          </div>
        </van-list>
        

      </van-tab>
      <van-tab title="好评">好评</van-tab>
      <van-tab title="差评">差评</van-tab>
    </van-tabs>

  </div>
</template>

<script>
import imgs2 from '../../../static/img/picture.png'
import { ImagePreview } from 'vant';
export default {
  data () {
    return {
      imgs22:[imgs2,imgs2,imgs2,imgs2,imgs2],
      rateValue:4,
      list: [],
      loading: false,
      finished: false
    }
  },
  methods:{
    onLoad() {
      setTimeout(() => { // 异步更新数据
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        this.loading = false;// 加载状态结束
        if (this.list.length >= 40) { // 数据全部加载完成
          this.finished = true;
        }
      }, 500);
    },
    onClickLeft(){
      this.$router.go(-1);
    },
    showImagePreview(position) {
      const instance = ImagePreview({
        images: ['../../../static/img/picture.png','../../../static/img/picture.png',
          '../../../static/img/picture.png','../../../static/img/picture.png','../../../static/img/picture.png'],
        asyncClose: true,
        startPosition: typeof position === 'number' ? position : 0,
        loop:false,
      });
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.comme{
  .commAll{
    .comm_time{
      color:grey;
      font-size: 12px;
    }
    .head_C{
      position: relative;
      top:4px;
      margin-right: 5px;
    }
    background-color: white;
    padding: 15px 10px;
    margin-bottom: 5px;
  }
  .van-tabs{
    
  }
  padding-top: 46px;
  background-color: #eeeeee;
}
</style>
