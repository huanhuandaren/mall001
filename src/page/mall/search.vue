<template>
  <div class="search">

    <van-row  class="searchPanl">
      <van-col span='2' style="text-align:right;"><van-icon name="arrow-left" color='#1989fa' class="back_icon" size='1.5em' @click="back" /></van-col>
      <van-col span='22' > 
        <van-search background='white'
          autofocus
          @focus='onfocus'
          v-model="value"
          placeholder="请输入商品名、品类或店铺名"
          show-action
          @search="onSearch"
          v-on:input='input_val'
        >
          <div slot="action" @click="onSearch" style="color:#1989fa">搜索</div>
        </van-search>
      </van-col>
    </van-row>

    <div v-show='is_input==1'>

      <div class="hist_tag" >最近搜索</div>
    
      <van-cell title="九芝堂驴胶补血颗粒" icon="clock" v-for='index in 5' :key='index' class="hist_cell" @click="onSearch('维生素E')">
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

    <div style="margin-top:45px;" v-show='is_input==2'>
      <van-cell title="维生素E" v-for='index in 5' :key='index' class="hist_cell" @click="onSearch('维生素E')"/>
    </div>

    <div style="margin-top:45px;" v-if='is_input==3'>
      <van-tabs v-model="active_shop_shaixuan" sticky color='#1989fa' >
        <van-tab title="综合">内容 1</van-tab>
        <van-tab>
          <div slot="title" class="tab_tit">
            <div>人气排序</div><img src="../../../static/img_icon/list_btn_normal.png" />
          </div>

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
              <van-cell slot="desc" title='仁和制药厂' value="销量：2000" size='mini'  class="desc_cell" />
              
              <div slot="tags" class="card_tags" >
                <span class="price_col1">￥{{(57.8*2).toFixed(1)}}</span>
                <span class="ora_price">￥{{(57.8*1).toFixed(1)}}</span>
              </div>
            </van-card>
          </div>

          </van-list>
        
        </van-tab>
        <van-tab>
          <div slot="title" class="tab_tit">
            <div>价格排序</div><img src="../../../static/img_icon/list_btn_normal.png" />
          </div>
          <p v-for='item1 in 1000' :key='item1'>啥都没奶粉</p>
        </van-tab>
        <van-tab title="销量">内容 4</van-tab>
      </van-tabs>
    </div>
    
    


  </div>
</template>

<script>
export default {
  data () {
    return {
      value:'',
      active:0,
      is_input:1,
      active_shop_shaixuan:1,
      list: [],
      loading: false,
      finished: false
    }
  },
  methods:{
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
    back(){
      this.$router.go(-1);
    },
    onfocus(){
      this.is_input=2;
    },
    delRecord(){

    },
    input_val(val){//输入事件
      if(val==''){
        this.is_input=1;
      }else{
        this.is_input=2;
      }
    },
    onSearch(val){
      if(val){
        this.value=val;
      }
      this.is_input=3;
    },
  },
  mounted(){
    
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.search{
  .tab_tit{
    display: flex;
    justify-content: center;
    img{
      position: relative;
      top:18px;
      width: 10px;
      height: 10px;
      margin-left: 2px;
    }
  }
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

  .van-card{
    background-color: white;
    border-bottom:1px solid #ebedf0;
    .van-cell::after{
      border: none!important;
    }
  }
 
}
</style>
