<template>
  <div class="Car_index">
    <van-nav-bar fixed  left-arrow title="购物车"   @click-left="backLastPage" >
      <span slot="right" @click="editCar"  v-if='isDone'>编辑</span>
      <span slot="right" @click="isDone=true"  v-if='!isDone'>完成</span>
    </van-nav-bar>
    
    <div class="prodAre">
      <van-cell-group>
        <van-cell value="运费：20元" class="shop_cell">
          <van-checkbox v-model="shopAllChecked" slot="title" checked-color='#e95c4d'>E大夫百穗自营店</van-checkbox>
        </van-cell>

        <van-row v-for='index in 2' :key='index' class="prodt_row">
          <van-col span='2' class="check_colo"><van-checkbox v-model="profChecked" checked-color='#e95c4d'/></van-col>

          <van-col span='22' >
            <div @click='goProd_d'>
              <van-card  
                title="养生堂天然维生素E软胶囊"
                thumb="../../../static/img/picture.png"
                >
                <van-cell slot="desc" value="规格：12粒装；重量100.5g" size='mini' is-link class="desc_cell" />

                <van-row slot="tags" >
                  <van-col sapn='16'>          
                    <van-stepper 
                      v-model="prdNum" 
                      integer
                      :min="1"
                      :max="10"
                      :step="1"/>
                  </van-col>
                  <van-col span='8' class="price_col" >￥{{(57.8*prdNum).toFixed(1)}}</van-col>
                </van-row>
              </van-card>
           </div>
          </van-col>
        </van-row>
      
      
      </van-cell-group>

       <van-cell-group>
        <van-cell value="免运费" class="shop_cell">
          <van-checkbox v-model="shopAllChecked" slot="title" checked-color='#e95c4d'>九芝堂商家店铺</van-checkbox>
        </van-cell>

        <van-row v-for='index in 2' :key='index' class="prodt_row">
          <van-col span='2' class="check_colo"><van-checkbox v-model="profChecked" checked-color='#e95c4d'/></van-col>

          <van-col span='22'>
            <div @click='goProd_d'>
              <van-card  
                title="养生堂天然维生素E软胶囊"
                thumb="../../../static/img/picture.png"
                >
                <van-cell slot="desc" value="规格：12粒装；重量100.5g" size='mini' is-link class="desc_cell" />

                <van-row slot="tags" >
                  <van-col sapn='19'>          
                    <span class="noProdtTag">对不起！没有库存了</span>
                  </van-col>
                
                  <van-col span='5' class="price_col" >￥57.8</van-col>
                </van-row>
              </van-card>
            </div>
          
          </van-col>
        </van-row>
      
      
      </van-cell-group>

    </div>

    <van-submit-bar  v-if='isDone'
      :price="3050"
      button-text="结算"
      @submit="onSubmitOrder">
      <van-checkbox v-model="checkedAll" checked-color='#e95c4d' style="margin-left:10px;">全选</van-checkbox>
    </van-submit-bar>

    <van-submit-bar  v-if='!isDone'
      button-text="删除"
      @submit="delAll">
      <van-checkbox v-model="checkedAll" checked-color='#e95c4d' style="margin-left:10px;">全选</van-checkbox>
    </van-submit-bar>

  </div>
</template>

<script>
import { Cell, CellGroup } from 'vant';
export default {
  data () {
    return {
      prdNum:1,
      profChecked:true,
      shopAllChecked:true,
      checkedAll: true,
      isDone:true
    }
  },
  methods:{
    backLastPage(e){
      this.$router.go(-1);
    },
    goProd_d(){
      this.$router.push({
        name:'prodDetail',
        params:{ }
      })
    },
    editCar(){
      this.isDone=false;
      this.profChecked=false;
      this.shopAllChecked=false;
      this.checkedAll=false;
    },
    onSubmitOrder(){
      this.$router.push({
        name:"sureOrder",
        params:{}
      })
    },
    delAll(){

    },

    setCookie(cname,cvalue,exdays)
    {
      var d = new Date();
      d.setTime(d.getTime()+(exdays*24*60*60*1000));
      var expires = "expires="+d.toGMTString();
      document.cookie = cname + "=" + cvalue + "; " + expires;
    }

  },
  mounted(){
 
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.Car_index{
   background-color: #eeeeee;
  .prodAre{
    margin-top:46px;
    .van-cell-group{
      margin-bottom: 4px;
      .van-cell::after{
        border: none!important;
      }
      .shop_cell{
        padding: 10px 10px;;
      }
      .van-card{
        background-color: white;
      }
      .prodt_row{
        border-top:1px solid #ebedf0;
      }
      .check_colo{
        text-align: right;
        .van-checkbox{
          position: relative;
          top:40px;
        }
      }
      .desc_cell{
        font-size: 12px;
        padding: 5px 0;
        border: none;
      }
      .noProdtTag{
         font-size: 12px;
         color:#e95c4d;
         position: relative;
         top:8px;
      }
      .price_col{
        float: right;
        position: relative;
        top:5px;
        font-size: 16px;
        color:#e95c4d;
      }
    }
    .van-hairline--top-bottom::after{
      border: none!important;
    }
  }
} 
</style>
