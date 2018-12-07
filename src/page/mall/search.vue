<template>
  <div class="search">
    <van-row  class="searchPanl">
      <van-col span='2' style="text-align:right;"><van-icon name="arrow-left" color='#1989fa' class="back_icon" size='1.5em' @click="back"/></van-col>
      <van-col span='22' > 
        <van-search background='white'
          v-model="value"
          placeholder="请输入商品名、品类或店铺名"
          show-action
          @search="onSearch"
        >
          <div slot="action" @click="onSearch" style="color:#1989fa">搜索</div>
        </van-search>
      </van-col>
    </van-row>
    
    <div class="hist_tag">最近搜索</div>
   
    <van-cell title="九芝堂驴胶补血颗粒" icon="clock" v-for='index in 5' :key='index' class="hist_cell">
      <van-icon slot="right-icon" name="cross" @click="delRecord" size='1.5em' />
    </van-cell>

    <div class="dellAllhist_tag">清除搜索历史</div>

    <van-tabs v-model="active" color='#1989fa'>
      <van-tab title="推荐搜索">
        <van-row v-for='index1 in 3' :key='index1' class="show_tag">
          <van-col span='8' v-for='index in 3' :key='index'><van-button size="normal">复方阿胶浆</van-button></van-col>
        </van-row>
      </van-tab>
      <van-tab title="热门搜索">
        <van-row v-for='index1 in 3' :key='index1' class="show_tag">
          <van-col span='8' v-for='index in 3' :key='index'><van-button size="normal">复合维生素片</van-button></van-col>
        </van-row>
      </van-tab>
    </van-tabs>
    
    

  </div>
</template>

<script>
export default {
  data () {
    return {
      value:'',
      active:0,
    }
  },
  methods:{
    back(){
      history.back()
    },
    delRecord(){

    },
    onSearch(){

    },
    getParams () {
      // 取到路由带过来的参数 
      let routerParams = this.$route.params.dataobj
      // 将数据放在当前组件的数据内
      this.msg = routerParams
      console.log(this.msg)
    },
  },
  watch: {
  // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
    '$route': 'getParams'
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.search{
  .searchPanl{
    border-bottom:1px solid #eeeeee;
    position: fixed;top:0;right: 0;left:0;
    .van-cell{
      border:1px solid red!important;
    }
  }
  .back_icon{
    position: relative;;
    top:10px;
  }
  .hist_tag{
    margin-top: 44px;
    color:grey;
    border-bottom:1px solid #ebedf0;
    padding-left: 18px;
    font-size: 14px;
    line-height: 25px;
  }
  .hist_cell{
    border-bottom:1px solid #ebedf0;
    color:gray;
    .van-icon{
      position: relative;
      top:3px;
    }
  }
  .dellAllhist_tag{
    text-align: center;
    color:gray;
    border-bottom:1px solid #ebedf0;
    line-height: 40px;
  }
 .van-tabs__line{
    width: 100%;
    background-color:#1989fa!important;
  }
  .van-tab--active{
    color:#30BBEE!important;
  }
  .show_tag{
    text-align: center;
    .van-col{
      margin-top:2px;
    }
  }
}
</style>
