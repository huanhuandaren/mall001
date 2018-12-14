<template>
  <div class="myOrder">
    <van-nav-bar fixed
      title="我的订单"
      left-arrow
      @click-left="onClickLeft"
    />

    <van-tabs v-model="active" style="margin-top: 46px;" color='#1989fa'>

      <van-tab title="全部" >

        <div class='prod_div' v-for='ind in 3' :key='ind'>
          <van-cell>
            <img slot="icon" src='../../../static/img_icon/icon_logomall.png' />
            <template slot="title">
              <span class="custom-text">E大夫自营店</span>
              <van-icon name="arrow" class="shop_arrow" />
            </template>
            <span slot="right-icon" class="prod_statu">卖家已发货</span>
          </van-cell>

          <div @click="goOrderDetail">
            <van-card 
              origin-price="10.00"
              price="2.00"
              num="2"
              desc="颜色分类：20粒装；重量：0.5g"  
              title="养生堂天然维生素E软胶囊250mg/粒"
              thumb="../../../static/img/picture.png"
            >
            </van-card>
          </div>

          <div class="tongji"><div class="left_text">共2件商品</div><div >小计：<span class="price_All">￥244.20 </span >(含运费￥0.00)</div></div>
          <div class="tongji" style="border:none;">
            <button class="left_btn">查看物流</button>
            <button class="rig_butt">确认收货</button>
          </div>
        </div>

      </van-tab>
      <van-tab title="待付款">

        <div class='prod_div' v-for='ind in 2' :key='ind'>
          <van-cell>
            <img slot="icon" src='../../../static/img_icon/icon_logomall.png' />
            <template slot="title">
              <span class="custom-text">E大夫自营店</span>
              <van-icon name="arrow" class="shop_arrow" />
            </template>
            <span slot="right-icon" class="prod_statu">等待买家付款</span>
          </van-cell>

          <div @click="goOrderDetail">
            <van-card 
              origin-price="10.00"
              price="2.00"
              num="2"
              desc="颜色分类：20粒装；重量：0.5g"  
              title="养生堂天然维生素E软胶囊250mg/粒"
              thumb="../../../static/img/picture.png"
            >
            </van-card>
          </div>
         
          <div class="tongji"><div class="left_text">共2件商品</div><div >小计：<span class="price_All">￥244.20 </span >(含运费￥0.00)</div></div>
          <div class="tongji" style="border:none;">
            <button class="left_btn">取消订单</button>
           
            <button class="rig_butt">付款</button>
          </div>
        </div>

      </van-tab>
      <van-tab title="待发货">内容 3</van-tab>
      <van-tab title="待收货">内容 4</van-tab>
      <van-tab title="待评价">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
          >
          <div  v-for="item in list" :key='item' class="prod_div">
            <van-cell>
              <img slot="icon" src='../../../static/img_icon/icon_logomall.png' />
              <template slot="title">
                <span class="custom-text">E大夫自营店</span>
                <van-icon name="arrow" class="shop_arrow" />
              </template>
              <span slot="right-icon" class="prod_statu">已签收</span>
            </van-cell>

            <div @click="goOrderDetail">
              <van-card 
                origin-price="10.00"
                price="2.00"
                num="2"
                desc="颜色分类：20粒装；重量：0.5g"  
                title="养生堂天然维生素E软胶囊250mg/粒"
                thumb="../../../static/img/picture.png"
              >
              </van-card>
            </div>
            <div class="tongji"><div class="left_text">共2件商品</div><div >小计：<span class="price_All">￥244.20 </span >(含运费￥0.00)</div></div>
            <div class="tongji" style="border:none;">
              <button class="left_btn">删除订单</button>
              <button class="rig_butt" @click="editComme">评价</button>
            </div>
          </div>
        </van-list>

      </van-tab>
    </van-tabs>


 



  </div>
</template>

<script>
export default {
  data () {
    return {
      active:0,
      list: [],
      loading: false,
      finished: false
    }
  },
  methods:{
    editComme(){
       this.$router.push({
        name:'editComm',
        params:{}
      })
    },
    onLoad() {
      setTimeout(() => { // 异步更新数据
        for (let i = 0; i < 5; i++) {
          this.list.push(this.list.length + 1);
        }
        this.loading = false;// 加载状态结束
        if (this.list.length >=8) { // 数据全部加载完成
          this.finished = true;
        }
      }, 500);
    },
    goOrderDetail(){
      this.$router.push({
        name:'orderDetail',
        params:''
      })
    },
    onClickLeft(){
      this.$router.go(-1);
    },
   
  },
  mounted(){
    if(this.$route.query){
      this.active=this.$route.query.activeKey;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.myOrder{

  .prod_div{
    .prod_statu{
      color:#e95c4d;
    }
    .shop_arrow{
      position: relative;
      top:2px;
    }
    .fap_row{
      font-size: 14px;
      padding:10px 15px;
      display: flex;
      justify-content: space-between;
    }
    background-color: white;
    .tongji{
      button{
        border-radius: 3px;
      }
      display: flex;
      padding:10px 15px;
      justify-content: flex-end;
      font-size: 14px;
      .left_text{
        margin-right: 20px;
        position: relative;
        top:3px;
      }
      .price_All{
        font-size: 16px;
      }
      border-bottom: 1px solid #ebedf0;
    }
    margin-bottom:5px;
  }


  .van-cell{
    img{
      margin-right: 10px;
      width: 20px;height: 20px;
      position: relative;
      top:2px;
    }
  }
  background-color: #eeeeee;
}
</style>
