<template>
  <div class="prodDetail">
    <van-nav-bar  left-arrow   @click-left="onClickLeft" fixed>
      <van-icon name="share" slot="right" />
    </van-nav-bar>

    <van-swipe :autoplay="3000" indicator-color='grey'>
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>

    <div class="prodTit">养生堂牌天然维生素E软胶囊 送维生素C+VE15日装 250mg/粒</div>

    <div class="prod_desc">
      <div>库存：180件</div>
      <div>已售225件</div>
      <div>湖北武汉</div>
    </div>

    <div class="price">
      <div class="new_price">￥120.0</div>
      <div class="orang_price">￥230.0</div>
    </div>

    <div class="yunF">运费：货到付款，运费9元，在线支付免运费</div>

    <ul class="tag_kouh">
      <li>百穗质保</li>
      <li>正品保证</li>
      <li>满额包邮</li>
      <li>退换规则</li>
    </ul>

    <van-cell title="天然维生素E 90g" is-link  size="large"  class="detai_cell"/>
    <van-cell title="购买须知" size="large" is-link  class="detai_cell cell2_q" />

    <div class="fapiao_tag">
      <div>海外商品不支持开具体发票。</div>
      亲爱的客户，由于天气原因，部分北方地区（华北、东北、新疆、内蒙古等）气温较低，若您收到液体或者膏剂可能会有结冰现象，专业药师提醒您，中成药及润滑剂类产品在室温下自然解冻即可...
    </div>

    <van-row class="staore_row">
      <van-col span='20'>
        <van-row>
          <van-col span='6'>
             <img src='../../../static/img_icon/E.png' />
          </van-col>
           <van-col span='18'>
             <div>百穗商城</div>
             <div class="renshu">E大夫在线百穗商城平台</div>
          </van-col>
        </van-row>
      </van-col>
      <van-col span='4' class="rig_per"> 
        <div>1.5万</div>
        <div class="renshu">关注人数</div>
      </van-col>
    </van-row>
    <div class='prod_param'>商品属性</div>
    <div class='prod_param'>产地 <span>海口市金盘开发区</span></div>
    <div class='prod_param'>规格 <span>250mg/粒</span></div>
    <div class='prod_param' style="border:none;">重量 <span>90g</span></div>
    <div class="prod_param_cont" v-show='isDet_prod'>
      商品详细规格，商品详细规格，商品详细规格，商品详细规格，商品详细规格，商品详细规格，商品详细规格，商品详细规格，商品详细规格，商品详细规格，商品详细规格，商品详细规格
    </div>
    <div class="prod_param_arrow">
      <van-icon name='arrow-down' v-show='!isDet_prod' @click="isDet_prod=true"/>
      <van-icon name='arrow-up' v-show='isDet_prod' @click="isDet_prod=false"/>
    </div>
    <div class='prod_detai' >
      <div class='prod_param' style="border:none;">商品详情</div>
    </div>
 
    <div class="userCommen">
      <div class="titC">用户评价<span>(5)</span></div>
      <div v-for='index in 3' :key='index' class="comm_div">
        <div class="comm_cont" >
          <div >张*</div>
          <div><van-rate v-model="rateValue"  size='15' readonly  color="#e95c4d"/></div>
        </div>
        <div class="commt_txt">非常满意！下次回购</div>
      </div>
      <div v-for='index in 2' :key='index' class="comm_div">
        <div class="comm_cont" >
          <div >张*</div>
          <div><van-rate v-model="rateValue" readonly size='15' color="#e95c4d"/></div>
        </div>
        <div class="commt_txt">非常满意！下次回购</div>
        <div class="commt_pic">
          <div v-for='(src,index) in imgs22' :key='index'>
            <img :src='src' @click="showImagePreview(index)"/>
          </div>
        </div>
      </div>
      <div class="checkAllComm" @click="checkComme"> 查看全部评价 </div>
    </div>

    <div class="rela_recom">
      <div class="recm_tit">
        <div >相关推荐</div>
        <div class="rel_more">更多<van-icon name="arrow" /></div>
      </div>
      <div class="cont_recm">
        <div class="cont_recm_col" v-for='k in 3' :key='k'>
          <img src='../../../static/img/picture.png'/>
          <div>九芝堂</div>
          <div class="tiit2">天然维生素E胶囊</div>
          <div class="recm_price">￥130</div>
        </div>
      </div>
    </div>

    <van-sku
      v-model="showBase"
      :sku="sku"
      quota='6'
      :goods="goods"
      reset-selected-sku-on-hide	
      reset-stepper-on-hide
      :hide-stock="sku.hide_stock"
      close-on-click-overlay
      goods-id="78234yterhth"
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
    />


    <van-goods-action>
      <van-goods-action-mini-btn icon="chat" text="客服" @click="onClickMiniBtn" />
      <van-goods-action-mini-btn icon="like-o" text="收藏" @click="onClickMiniBtn" />
      <van-goods-action-big-btn text="加入购物车" @click="onClickBigBtn" />
      <van-goods-action-big-btn text="立即购买" @click="onClickBigBtn" primary />
    </van-goods-action>

  </div>
</template>

<script>
import imgs1 from '../../../static/img/advs.png'
import imgs2 from '../../../static/img/picture.png'
import { ImagePreview } from 'vant';
export default {
  data () {
    return {
      images: [ imgs1,imgs1,imgs1  ],
      imgs22:[imgs2,imgs2,imgs2,imgs2,imgs2],
      activeNames: ['1'],
      icon_name:'arrow-down',
      isDet_prod:false,
      rateValue:4,
      showBase:false,
      sku: {
        tree: [ // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。// 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
          {
            k: '规格', // skuKeyName：规格类目名称
            v: [
              {
                id: '30349', // skuValueId：规格值 id
                name: '精装', // skuValueName：规格值名称
               // imgUrl: '../../../static/img/picture.png' // 规格类目图片，只有第一个规格类目可以定义图片
              },
              {
                id: '1215',
                name: '简装',
                imgUrl: '../../../static/img/sku_img.png'
              }
            ],
            k_s: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          },
          {
            k: '尺寸', // skuKeyName：规格类目名称
            v: [
              {
                id: '30342', // skuValueId：规格值 id
                name: '大码', // skuValueName：规格值名称
              },
              {
                id: '1415',
                name: '小码',
              }
            ],
            k_s: 's2' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          }
        ],
        list: [// 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
          {
            id: 2259, // skuId，下单时后端需要
            price: 10000, // 价格（单位分）
            s1: '1215', // 规格类目 k_s 为 s1 的对应规格值 id
            s2: '1415', // 规格类目 k_s 为 s2 的对应规格值 id
            s3: '0', // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 110 // 当前 sku 组合对应的库存
          },
          {
            id: 2258, // skuId，下单时后端需要
            price: 13000, // 价格（单位分）
            s1: '30349', // 规格类目 k_s 为 s1 的对应规格值 id
            s2: '30342', // 规格类目 k_s 为 s2 的对应规格值 id
            s3: '0', // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 110 // 当前 sku 组合对应的库存
          },
          {
            id: 2252, // skuId，下单时后端需要
            price: 15000, // 价格（单位分）
            s1: '30349', // 规格类目 k_s 为 s1 的对应规格值 id
            s2: '30342', // 规格类目 k_s 为 s2 的对应规格值 id
            s3: '0', // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 140 // 当前 sku 组合对应的库存
          }
        ],
        price: '120.0', // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        hide_stock: false, // 是否隐藏剩余库存
      },
      goods: {
        title: '养生牌天然维生素E软胶囊',// 商品标题
        picture: '../../../static/img/picture.png',// 默认商品 sku 缩略图
      },
    }
  },
  methods:{
    checkComme(){
      this.$router.push({
        name:"comme",
        params:{name:1}
      })
    },
    onBuyClicked(){ //立即购买
      this.showBase=false;
      this.$router.push({
        name:"sureOrder",
        params:{name:1}
      })
    },
    onAddCartClicked(){//添加购物车
      this.$toast('添加成功！');
      this.showBase=false;
    },
    onClickBigBtn(e){
      this.showBase=true;
    },
    onClickLeft(){
      this.$router.go(-1);
    },
    showImagePreview(position) {
      const instance = ImagePreview({
        images: ['../../../static/img/picture.png','../../../static/img/picture.png',
          '../../../static/img/picture.png','../../../static/img/picture.png','../../../static/img/picture.png'],
        asyncClose: true,
        startPosition: typeof position === 'number' ? position : 0,
        loop:false,
      });
    },

  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.prodDetail{
  .rela_recom{
    background-color: white;
    padding: 15px 10px;
    .cont_recm{
      margin-top: 20px;
      display: flex;
      justify-content: space-around;
      .cont_recm_col{
        text-align: center;
        .recm_price{
          color:#e95c4d;
        }
        .tiit2{
          color:grey;
          font-size: 12px;
          margin: 5px auto;
        }
        img{
          height: 80px;width:40px;
          margin:10px auto;
        }
      }
    }
    .recm_tit{
      display: flex;
      justify-content: space-between;
      .rel_more{
        font-size: 14px;
        color:gray;
        .van-icon{
          position: relative;
          top:2px;
        }
      }
    }
  }
  .userCommen{
    .checkAllComm{
      padding-top: 15px;
      text-align: center;
      font-size: 14px;
      color:gray;
    }
    padding: 15px 10px;
    background-color: white;
    .titC{
      padding: 5px 0;
      span{
        color:#e95c4d;
        font-size:14px;
        margin-left: 5px;
      }
    }

    margin-bottom: 5px;
  }
  padding-bottom: 50px;
  background-color: #eeeeee;
  .van-nav-bar {
     background-color: rgba(0, 0, 0, 0);
    .van-icon{
      color:black;
    }
  }
  .van-swipe{
    height:350px;
    img{
      height:350px;
      width: 100%;
    }
  }
  .pro_D{
    background-color: white;
    padding: 5px 10px;
    display: flex;
  }
  .prodTit{
    background-color: white;
   .pro_D
  }
  .prod_desc{
    .pro_D;
    justify-content: space-between;
    color:grey;
    font-size: 14px;
    background-color: white;
  }
  .price{
    background-color: white;
    line-height: 18px;
    .pro_D;
    .new_price{
      color:#e95c4d;
      font-size: 18px;
    }
    .orang_price{
      margin-left: 10px;
      text-decoration:line-through;
      color:grey;
      font-size: 14px;
    }
   
  }
  .yunF{
    background-color: white;
    font-size: 14px;
    color:gray;
    .pro_D;
  }
  .tag_kouh{
    background-color: white;
    .pro_D;
    list-style-type:disc;
    list-style-position:inside;
    font-size: 14px;
    justify-content: space-between;
    color:gray;
  }
  .detai_cell{
    background-color: white;
    padding:10px 10px;
  }
  .cell2_q:not(:last-child)::after{
    border-bottom: none!important;
  }
  .fapiao_tag{
    background-color: white;
    padding: 5px 10px;
    color:gray;
    font-size: 14px;
    div{
      margin-bottom: 5px;
    }
  }
  .staore_row{
    background-color: white;
    border-top:1px solid #ebedf0;
    padding: 20px 10px;
    line-height: 30px;
    margin-bottom: 5px;
    .renshu{
      color:gray;
      font-size: 14px;
    }
    .rig_per{
      font-size: 14px;
      text-align: center;
    }
  }
  .prod_param{
    padding: 15px 10px;
    background-color: white;
    border-bottom:1px solid #ebedf0;
    span{
      margin-left: 50px;
    }
  }
  .prod_param_cont{
    background-color: white;
    padding: 0 10px;
    color:gray;
    font-size: 14px;
  }
  .prod_param_arrow{
    background-color: white;
    text-align: center;
    padding: 10px auto;
    margin-bottom: 5px;
  }
  .prod_detai{
    height: 150px;
    background-color: white;
    margin-bottom: 5px;
  }
}
</style>
