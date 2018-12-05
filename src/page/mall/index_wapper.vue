<template>
  <div class="index_wapper">
    <van-nav-bar fixed 
      left-text="返回" 
      left-arrow
      @click-left="back" 
    >
      <van-search placeholder="请输入搜索关键词" v-model="search_value" slot="title" background='rgba(0, 0, 0, 0)' >
        <van-icon name="search" slot="left-icon" color='white' size='20px'/>
      </van-search>
      <van-icon name="chat" slot="right" color='black' size='20px'/>
    </van-nav-bar>

    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(image, index) in banner_images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>

    <div class="tagDiv">
      <span class="tagDiv_span1"><img src="../../../static/img/btn_Preferential.png"/></span>
      <span class="tagDiv_span2">首次购</span>
      <span>首次买享受九折特惠</span>
    </div>
    
    <van-swipe :autoplay="3000" class="swip_nav">
      <van-swipe-item v-for="index in 2" :key="index">
        <van-row v-for="index1 in 2" :key="index1">
          <van-col span="6" v-for='item in navList' :key='item'>
            <img :src='item.img'/>
            <span>{{item.txt}}</span>
          </van-col>
        </van-row>
      </van-swipe-item>
    </van-swipe>


  </div>
</template>

<script>
import banner from '../../../static/img/banner.png'
import banner1 from '../../../static/img/banner1.png'
import icon_Nutrition from '../../../static/img_icon/icon_Nutrition.png'
import { Cell, CellGroup } from 'vant';

export default {
 
  data () {
    return {
       banner_images: [
        banner,banner1
      ],
      search_value:'',
      navList:[{img:icon_Nutrition,txt:"营养保健",path:''},{img:icon_Nutrition,txt:"营养保健",path:''},{img:icon_Nutrition,txt:"营养保健",path:''}],
    }
  },
  methods:{
    back: function () {
      history.back();
    },
    onSearch:function(val){
      debugger
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.index_wapper{
  .van-nav-bar{
    background-color: rgba(0, 0, 0, 0);
    .van-cell{
      background-color: rgba(0, 0, 0, 0.5)!important;
    }
    .van-nav-bar__text,.van-icon{
      color:black;
    }
    input{
      background-color: rgba(0, 0, 0, 0)!important;
      color:white!important;
    }
    input::-webkit-input-placeholder{
      color:white!important;
    }
  }
  .van-nav-bar::after{
    border: none!important;
  }
  .van-swipe img{
    width: 100%;
  }
  .tagDiv{
    height:40px;;
    line-height:40px;
    text-align: center;
    font-size: 14px;
    .tagDiv_span1{
      border-right: 1px solid grey;
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
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
  }
}

</style>
