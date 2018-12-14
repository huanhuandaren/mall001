<template>
  <div class="orderDetail">
    <van-nav-bar fixed
      title="订单详情"
      left-arrow
      @click-left="onClickLeft"
    />

    <div class="orderNo">
      <div>
        <div>订单号：456849456</div>
        <div class="time_tag">剩余23小时自动关闭</div>
      </div>
      <div class="wiat_txt">等待您付款</div>
    </div>

    <div class="shouHInfo" >
      <div class="conac_peop">张三 186****1236</div>
      <van-cell>
        <img slot="icon" src='../../../static/img_icon/icon_ddxq_address_mallmdpi.png' />
        <span slot="title">湖北省武汉市武昌区中山大道112号</span>
      </van-cell>
    </div>

    <div class='prod_div'>
      <van-cell>
        <img slot="icon" src='../../../static/img_icon/icon_logomall.png' />
        <template slot="title">
          <span class="custom-text">E大夫自营店</span>
        </template>
      </van-cell>
      <div @click='goProd_d'>
        <van-card 
          num="1"
          desc="颜色分类：20粒装；重量：0.5g"  
          title="养生堂天然维生素E软胶囊250mg/粒"
          thumb="../../../static/img/picture.png"
        >
          <span slot="footer" class="price_or">￥244.20 </span>
        </van-card>
      </div>
      <van-cell title="支付方式" value="在线支付+货到付款" />
      <div title="发票信息" class="fap_row" >
        <div>发票信息</div>
        <div>发票抬头：张三 明细（电子）-个人</div>
      </div>
      <van-cell title="商品总额" value="￥130.00" />
      <van-cell title="减免" value="-￥20.00" />
      <van-cell title="运费" value="￥20.00" />
      <div class="tongji">实付款（含运费）：<span class="price_or">￥244.20 </span ></div>
      <div class="tongji">下单时间：2018-12-23 06:45:12</div>
    </div>
    
    <div class="order_opert_btn">
      <button  class="left_btn">取消订单</button>
      <button class="rig_butt">付款</button>
    </div>
  
  </div>
</template>

<script>
export default {
  data () {
    return {
      checked_EB:true,
    }
  },
  methods:{
    goProd_d(){
      this.$router.push({
        name:'prodDetail',
        params:{ }
      })
    },
    onClickLeft(){
      this.$router.go(-1);
    },
  
  },
  mounted(){
 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.orderDetail{
  button{
    border-radius: 3px;
  }
  .order_opert_btn{
    border-top:1px solid #ebedf0;
    position: fixed;
    bottom:0;
    padding: 15px 10px;
    background-color: white;
    font-size: 14px;
    display: flex;
    justify-content: flex-end;
    left: 0;right: 0;
  }
  .shouHInfo{
    .conac_peop{
      background-color: white;
      padding: 0 15px;
      font-size: 14px;
      padding-left: 45px;
      padding-top: 10px;
    }
    margin-bottom: 5px;
  }
  .orderNo{
    background: url('../../../static/img/bg_ddxq_red_mallxhdpi.png')  no-repeat;
    background-size: 100% 100%;
    color:white;
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    line-height: 30px;
    .time_tag{
      font-size: 14px;
    }
    .wiat_txt{
      margin-right: 75px;
    }
  }

  .prod_div{
    .fap_row{
      font-size: 14px;
      padding:10px 15px;
      display: flex;
      justify-content: space-between;
      border-bottom:1px solid #ebedf0;
    }
    background-color: white;
    .tongji{
      display: flex;
      padding:10px 15px;
      justify-content: flex-end;
      font-size: 14px;
    }
    .price_or{
      font-size: 16px;
      color:#e95c4d;
    }
    
  }


  .van-cell{
    img{
      margin-right: 10px;
      width: 20px;height: 20px;
      position: relative;
      top:2px;
    }
  }
  .van-cell:not(:last-child)::after{
    border:none!important;
  }
  padding-top: 46px;
  padding-bottom: 50px;
  background-color: #eeeeee;
}
</style>
