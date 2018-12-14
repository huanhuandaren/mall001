<template>
  <div class="mall_index">
    <van-row  class="searchPanl">
      <van-col span='20' offset="2"> <van-search placeholder="请输入商品名、品类或店铺名" @click="goSearch"  background='rgba(0, 0, 0, 0)'/></van-col>
      <van-col span='2' ><van-icon name="chat" color='black' size='20px' class="rig_icon"/></van-col>
    </van-row>

    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(image, index) in banner_images" :key="index">
        <img v-lazy="image" class="banner_img"/>
      </van-swipe-item>
    </van-swipe>

    <div class="tagDiv">
      <span class="tagDiv_span1"><img src="../../../static/img/btn_Preferential.png"/></span>
      <span class="tagDiv_span2">首次购</span>
      <span>首次买享受九折特惠</span>
    </div>
    
    <van-swipe  class="swip_nav">
      <van-swipe-item v-for="index in 2" :key="index">
        <van-row v-for="index1 in 2" :key="index1">
          <van-col span="6" v-for='item in navList' :key='item'>
            <img :src='item.img'/>
            <div class="text">{{item.txt}}</div>
          </van-col>
        </van-row>
      </van-swipe-item>
    </van-swipe>

    <ul class="center_imgList"  ref="cen_img_list" >
      <li><img src='../../../static/img/pic1.png'/></li>
      <li><img src='../../../static/img/pic2.png'/></li>
      <li><img src='../../../static/img/pic3.png'/></li>
    </ul>

    <div class="active_con" >
      <div class="tit1">-特惠活动-<span>更多<van-icon name="arrow" /></span></div>
      <van-row class="cont1">
        <van-col  span="9" >
          <div class="tit2 ledt_col_top_txt">限时抢购</div>
          <div class="hot ledt_col_top_txt">{{timeDown}}</div>
          <van-row>
            <van-col span='14'>
               <div class="left_bot_txt">
                <div class="hot">99元</div>
                <div class="hot">限时抢</div>
              </div>
            </van-col>
            <van-col span='10'><img src="../../../static/img/picture.png" class="vitam1"/></van-col>
          </van-row>
        </van-col>
        <van-col span="15" class="rigt_col">
          <van-row class="rig_row1">
            <van-col span="14">
              <div class="tit2">拼划算</div>
              <div class="tit3">fancel综合维生素</div>
            </van-col>
            <van-col span="10"><img src="../../../static/img/vitamin.png"  /></van-col>
          </van-row>
          <van-row style="margin-top:15px;">
            <van-col span="12">
              <van-row>
                <van-col span="14">
                  <div class="tit2">新店放血</div>
                  <div class="tit3">维生素B</div>
                </van-col>
                <van-col span="10">
                  <img src="../../../static/img/blue.png"  />
                </van-col>
              </van-row>
            </van-col> 
            <van-col span="12" >
              <van-row>
                <van-col span="14">
                  <div class="tit2">新品特惠</div>
                  <div class="tit3">R佳维片</div>
                </van-col>
                <van-col span="10">
                  <img src="../../../static/img/shancun.png"  />
                </van-col>
              </van-row>
            </van-col>
          </van-row>


        </van-col>
      </van-row>

    </div>

    <div class="active_con" >
      <div class="tit1">-热销产品-<span>更多<van-icon name="arrow" /></span></div>
      <van-row class="cont1">
        <van-col  span="8" class="ledt_col" v-for='index in 3' :key='index'>
          <div class="tit2">限时抢购</div>
          <div class="hot">维生素E</div>
          <img src="../../../static/img/picture.png" class="vitam2"/>
          <div style="margin-left:20px;">
            <div class="hot">99元</div>
            <div class="tit3">仁和制药厂</div>
          </div>
        </van-col>
      </van-row>
    </div>

    <div class="active_con" >
      <div class="tit1">-猜你喜欢-<span>更多<van-icon name="arrow" /></span></div>
      <van-row class="cont1">
        <van-col  span="9" >
          <div class="tit2 ledt_col_top_txt">限时抢购</div>
          <div class="hot ledt_col_top_txt">{{timeDown}}</div>
          <van-row>
            <van-col span='14'>
               <div class="left_bot_txt">
                <div class="hot">99元</div>
                <div class="hot">限时抢</div>
              </div>
            </van-col>
            <van-col span='10'><img src="../../../static/img/picture.png" class="vitam1"/></van-col>
          </van-row>
        </van-col>
        <van-col span="15" class="rigt_col">
          <van-row >
            <van-col span="12">
              <van-row>
                <van-col span="14">
                  <div class="tit2">新店放血</div>
                  <div class="tit3">维生素B</div>
                </van-col>
                <van-col span="10">
                  <img src="../../../static/img/blue.png"  />
                </van-col>
              </van-row>
            </van-col> 
            <van-col span="12" >
              <van-row>
                <van-col span="14">
                  <div class="tit2">新品特惠</div>
                  <div class="tit3">R佳维片</div>
                </van-col>
                <van-col span="10">
                  <img src="../../../static/img/shancun.png"  />
                </van-col>
              </van-row>
            </van-col>
          </van-row>

          <van-row style="margin-top:30px;" >
            <van-col span="12">
              <van-row>
                <van-col span="14">
                  <div class="tit2">新店放血</div>
                  <div class="tit3">维生素B</div>
                </van-col>
                <van-col span="10">
                  <img src="../../../static/img/blue.png"  />
                </van-col>
              </van-row>
            </van-col> 
            <van-col span="12" >
              <van-row>
                <van-col span="14">
                  <div class="tit2">新品特惠</div>
                  <div class="tit3">R佳维片</div>
                </van-col>
                <van-col span="10">
                  <img src="../../../static/img/shancun.png"  />
                </van-col>
              </van-row>
            </van-col>
          </van-row>

        </van-col>
      </van-row>

    </div>

    <div class="active_con" >
      <div class="tit1">-新品推荐-<span>更多<van-icon name="arrow" /></span></div>
      <van-row class="cont1">
        <van-col  span="12" >
          <div class="tit2 ledt_col_top_txt">限时抢购</div>
          <div class="hot ledt_col_top_txt">{{timeDown}}</div>
          <van-row>
            <van-col span='14'>
               <div class="left_bot_txt">
                <div class="hot">99元</div>
                <div class="hot">仁和制药厂</div>
              </div>
            </van-col>
            <van-col span='10'><img src="../../../static/img/picture.png" class="vitam1"/></van-col>
          </van-row>
        </van-col>
        <van-col span="12" class="rigt_col">
          <van-row v-for='index in 2' :key='index'>
            <van-col span="12" style="text-align:center">
              <div class="tit2">进口产品</div>
              <div class="tit3">综合维生素</div>
            </van-col> 
            <van-col span="12">
              <img src="../../../static/img/vitamin.png"  />
            </van-col>
          </van-row>
        </van-col>
      </van-row>

    </div>

  </div>
</template>

<script>
import banner from '../../../static/img/banner.png'
import banner1 from '../../../static/img/banner1.png'
import icon_Nutrition from '../../../static/img_icon/icon_Nutrition.png'
import icon_home from '../../../static/img_icon/icon_home.png'
import icon_healthy from '../../../static/img_icon/icon_healthy.png'
import icon_health from '../../../static/img_icon/icon_health.png'
import pic1 from '../../../static/img/pic1.png'
import pic2 from '../../../static/img/pic2.png'
import pic3 from '../../../static/img/pic3.png'

export default {
  data () {
    return {
       banner_images: [
        banner,banner1
      ],
      navList:[
        {img:icon_Nutrition,txt:"营养保健",path:''},
        {img:icon_home,txt:"居家用品",path:''},
        {img:icon_healthy,txt:"健康护理",path:''},
        {img:icon_health,txt:"滋补养身",path:''},
      ],
      timeDown:'12:34:50'
    }
  },
  methods:{
    goSearch(){
      this.$router.push({
        path: '/mall/search', 
        query: { 
          name: 'name', 
          dataObj: this.navList
        }
      });
    },
  },
  mounted() {
   
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.mall_index{
  .van-sku-messages{
    padding-bottom: 0;
  }
  .van-hairline--top-bottom::after {
    border: none!important;
  }
  padding-bottom: 50px;
  background-color: #eeeeee;
  .searchPanl{
    z-index: 7;
    background-color: rgba(0, 0, 0, 0);
    position: fixed;top:0;right: 0;left:0;
    .van-cell{
      background-color: rgba(0, 0, 0, 0.3)!important;
    }
    .van-icon{
      color:white;
    }
    .rig_icon{
      position: relative;
      top:10px;
    }
    input{
      background-color: rgba(0, 0, 0, 0)!important;
      color:white!important;
    }
    input::-webkit-input-placeholder{
      color:white!important;
    }
  }
  .van-swipe{
    background-color: white;
  }
  .banner_img{
    width: 100%;
  }
  .tagDiv{
    background-color: white;
    height:40px;;
    line-height:40px;
    text-align: center;
    font-size: 14px;
    .tagDiv_span1{
      border-right: 1px solid  #e0e0e0;
      padding-right: 10px;
      img{
        position: relative;
        top:2px;
      }
    }
    .tagDiv_span2{
      border: 1px solid #e95c4d ;
      color:#e95c4d ;
      padding:2px;
      border-radius:5px;
      margin-left: 5px;
    }
  }
  .swip_nav{
    border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid  #e0e0e0;
    .van-col{
      text-align: center;
    }
    img{
      height: 50px;;width: 50px;
      margin-top: 10px;
    }
    .text{
      font-size: 14px;
      color:gray;
      margin-bottom: 10px;
    }
  }
  .center_imgList{
    background-color: white;
    display: flex;
    overflow-x: auto;
    padding: 10px 0;
    img{
      margin-left: 10px;
    }
  }
  .center_imgList::-webkit-scrollbar {
    display: none;
  }
  .active_con{
    margin-top:5px;
    background-color: white;
    .tit1{
      text-align: center;
      padding-top: 10px;
      span{
        float: right;
        margin-right: 5px;
        font-weight: normal;
        font-size: 12px;
      }
    }
    .cont1{
       padding: 10px 0;
       .tit2{
         font-size: 14px;
       }
       .tit3{
         font-size: 13px;
         color:grey;
       }
       .hot{
          color:red;
          font-size: 14px;
       }
      .ledt_col_top_txt{
          margin-left: 20px;
        }
       .ledt_col>div{
         margin-left: 20px;
       }
        .left_bot_txt{
          margin-top: 60px;
          margin-left: 20px;
        }
        .vitam1{
          width: 50px;height:100px;
        }
        .vitam2{
          width:40px;height:80px;
          margin-left:60px;
        }
    }
  }


}

</style>
