<template>
  <div class="sureOrder">
    <van-nav-bar fixed
      title="确认订单"
      left-arrow
      @click-left="onClickLeft"
    />

    <div class="conac_div" @click="goAddress">
      <div class="name_conac">张三 186****1236</div>
      <van-cell  is-link >
        <img slot="icon" src='../../../static/img_icon/icon_addressmall.png' />
        <template slot="title">
          <span class="custom-text">湖北省武汉市武昌区中山大道112号</span>
        </template>
      </van-cell>
    </div>

    <div class='prod_div'>
      <van-cell>
        <img slot="icon" src='../../../static/img_icon/icon_logomall.png' />
        <template slot="title">
          <span class="custom-text">E大夫自营店</span>
        </template>
      </van-cell>
      <van-card 
        num="1"
        desc="颜色分类：20粒装；重量：0.5g"  
        title="养生堂天然维生素E软胶囊250mg/粒"
        thumb="../../../static/img/picture.png"
      >
        <div slot="footer" class="price_or">￥244.20 </div>
      </van-card>
  
      <van-cell title="支付配送" value="在线支付" />
      <van-cell title="运费" value="￥20.00" />
      <van-cell title="快递" value="申通快递配送" />
      <div title="发票信息" class="fap_row" >
        <div>发票信息</div>
        <div>发票抬头：张三 明细（电子）-个人</div>
      </div>
      <div class="liuy">
        <span>买家留言：</span>
        <input type='text' placeholder="选填：请填写内容已和买家协商确认"/>
      </div>
      <div class="tongji"><div class="left_text">共1件商品</div><div >小计：<span class="price_or">￥244.20 </span ></div></div>
    </div>
    
    <div class="pay_rel">
      <div class="row1">
        <div class="left_col">
          <div class="name_ray">E币：</div>
          <div class="val_ray">共3400E币，使用2000E币，抵2.0元<van-icon name='arrow'/></div>
        </div>
        <van-switch v-model="checked_EB" size='14px' />
      </div>
      <div class="row2">
        <img src="../../../static/img_icon/icon_warningmall.png"/>
        提交订单后E币将被扣除，无法退还！
      </div>
      <van-cell title="商品总额" value="￥130.00" />
      <van-cell title="减免" value="-￥20.00" />
      <van-cell title="运费" value="￥20.00" />
      
    </div>

    <van-submit-bar
      :price="3050"
      button-text="提交订单"
      @submit="onSubmit"
    />
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
    goAddress(){
      this.$router.push({
        name:'address',
        params:{name:1}
      })
    },
    onClickLeft(){
      this.$router.go(-1);
    },
    onSubmit(){
      this.$router.push({
        name:'orderDetail',
        params:{}
      })
    },
  },
  mounted(){
 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.sureOrder{
  .van-cell:not(:last-child)::after{
    border:none!important;
  }
  .pay_rel{
    border-bottom:1px solid #ebedf0;
    .row2{
      color:#e95c4d;
      padding:10px 15px;
      img{
        width: 18px;height: 18px;
        position: relative;
        top:4px;
        margin-right: 5px;
      }
    }
    color:#323233;
    font-size: 14px;
    background-color: white;
    .row1{
      .left_col{
        display: flex;
        justify-content: space-between;
      }
      padding:10px 15px;
      display: flex;
      justify-content: space-between;
    }
  }
  .prod_div{
    .fap_row{
      font-size: 14px;
      padding:10px 15px;
      display: flex;
      justify-content: space-between;
    }
    margin-bottom: 5px;
    background-color: white;
    .liuy{
      display: flex;
      font-size: 14px;
      padding:10px 15px;
      span{
        color:#323233;
      }
      input{
        border: none;
        width: 70%;
      }
      border-top:1px solid #ebedf0;
    }
    .tongji{
      display: flex;
      padding:10px 15px;
      justify-content: flex-end;
      color:#323233;
      font-size: 14px;
      .left_text{
        margin-right: 20px;
        position: relative;
        top:3px;
      }
    }
  }

  .price_or{
    font-size: 16px;
    color:#e95c4d;
  }
  .van-cell{
    img{
      margin-right: 10px;
      width: 20px;height: 20px;
      position: relative;
      top:2px;
    }
  }
  padding-bottom: 50px;
  background-color: #eeeeee;
}
</style>
