<template>
  <div class="my_index">
    <van-nav-bar fixed  title="张三"  >
      <img slot="right" src='../../../static/img_icon/Setup.png' @click="setting"  class="set_icon"/>
    </van-nav-bar>
    <van-row class="headDiv">
      <van-col span='12' >
        <div @click="goInfo">
          <van-row >
            <van-col span='9'><img src="../../../static/img_icon/face.png" class="head"/></van-col>
            <van-col span='15'>
              <div style="margin-top:5px;">新用户注册</div>
              <div>个人信息></div>
            </van-col>
          </van-row>
        </div>
       
      </van-col>
      <van-col span='12' class="right_col">
        <img src='../../../static/img_icon/sign.png' v-if='!isSign' @click="signup"/> 
        <img src='../../../static/img_icon/signup.png'  v-if='isSign' @click="isSign=false"/> 
      </van-col>
    </van-row>
    
    <div class="jfDiv">
      <div class="jfDiv_col1">
        <div>0.0</div>
        <div>我的余额</div>
      </div>
      <div class="jfDiv_col2">
        <div>0</div>
        <div>我的积分</div>
      </div>
    </div>

    <van-tabbar class="my_tab" fixed='false'>
      <van-tabbar-item :info="item.info" v-for='item in menu' :key='item' :to='item.route1'>
        <span>{{item.txt}}</span>
        <img slot="icon" :src="item.img" >
      </van-tabbar-item>
    </van-tabbar>

    <div class="cell_gro">

      <van-cell is-link :to="{name:'mark',params:{}}" >
        <template slot="title">
          <img src='../../../static/img_icon/like.png'/>
          <span class="custom-text">我的收藏</span>
        </template>
      </van-cell>
      <van-cell  is-link  to=''>
        <template slot="title">
          <img src='../../../static/img_icon/friend.png'/>
          <span class="custom-text">邀请好友</span>
        </template>
      </van-cell>
      <van-cell  is-link to=''>
        <template slot="title">
          <img src='../../../static/img_icon/ask.png'/>
          <span class="custom-text">客户服务</span>
        </template>
      </van-cell>
      <van-cell  is-link  to='' info="8">
        <template slot="title">
          <img src='../../../static/img_icon/help.png'/>
          <span class="custom-text">帮助</span>
        </template>
      </van-cell>

    </div>

  </div>
</template>

<script>
import icon_muorderlist from '../../../static/img/icon_muorderlist.png'
import icon_shopcar from '../../../static/img/icon_shopcar.png'
import icon_waitpay from '../../../static/img/icon_waitpay.png'
import icon_reimburse from '../../../static/img/icon_reimburse.png'
export default {
  data () {
    return {
      isSign:false,
      menu:[
        {img:icon_muorderlist,txt:"我的订单",route1:'/my/myOrder'} ,
        {img:icon_shopcar,txt:"购物车",route1:'/car/index',info:3},
        {img:icon_waitpay,txt:"待付款",route1:{path:'/my/myOrder',query: { activeKey: 1 }}},
        {img:icon_reimburse,txt:"退款/售后"},
      ]
    }
  },
  methods:{
    goInfo(){
      this.$router.push({
        name:"myInfo",
        params:{}
      })
    },
    onChange(key) {
      this.activeKey = key;
    },
    setting(){
      this.$router.push({
        name:'setting',
        params:{}
      })

    },
    goDrec(route1){
      this.$router.push({
        name:route1,
        params:{ }
      })
    },
    signup(){
      this.$toast('签到成功！');
      this.isSign=true;
    }
  },
  mounted(){
  
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.my_index{
  .my_tab{
    position: relative;
    height: 70px;
    img{
      height: 30px;width:30px;
    }
  }
  .van-nav-bar{
    background-color: #30BBEE;;
    color:white;
  }
  .van-nav-bar::after{
    border: none;
  }
  .set_icon{
    position: relative;
    top:5px;
  }
  .headDiv{
    color:white;
    padding: 20px 10px;
    margin-top: 46px;
    background-color: #30BBEE;
    .right_col{
      img{
        float: right;
        margin-right:20px;
        margin-top: 15px;
      }
    }
  }
  .jfDiv{
    color:white;
    padding: 20px 0;
    background-color: #57C6EF;
    column-count: 2;
    text-align: center;
    .jfDiv_col1{
      border-right: 1px solid white;
    }
  }
  .cell_gro{
    img{
      position: relative;
      top:3px;
      width: 18px;height: 18px;
    }
  }
 
}
</style>
