<template>
  <div class="mark">
    <van-nav-bar fixed
      title="我的收藏"
      left-arrow
      @click-left="onClickLeft"
    />

    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >

      <div  v-for="item in list" :key="item" @click="prodDetail(item)" >
        <van-card
          title="养生堂天然维生素E软胶囊250mg/粒 买一送三"
          thumb="../../../static/img/picture.png"
          >
          <van-cell slot="desc" title='仁和制药厂' size='mini'  class="desc_cell" />
          
          <div slot="tags" class="card_tags" >
            <span class="price_col1">￥{{(57.8*2).toFixed(1)}}</span>
            <span class="ora_price">￥{{(57.8*1).toFixed(1)}}</span>
          </div>
        </van-card>
      </div>

    </van-list>

  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [],
      loading: false,
      finished: false
    }
  },
  methods:{
    onClickLeft(){
      this.$router.go(-1);
    },
    prodDetail(item){
      this.$router.push({
        path: '/mall/prodDetail', 
        query: { 
          name: 'name', 
          dataObj: item
        }
      });
    },
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
  },
      
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.mark{
  background-color: #eeeeee;
  padding-top: 46px;
  .van-card{
    background-color: white;
    border-bottom:1px solid #ebedf0;
    .van-cell::after{
      border: none!important;
    }
  }
}

</style>
