<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
   mounted(){
     
    // var url=decodeURI(location.href);
    // var userId=url.split("userId=")[1].split("&openid=")[0];
    // var openid=url.split("&openid=")[1].split("&headimgurl=")[0];
    // this.baseUrl.loginInfo.headimgurl=url.split("&headimgurl=")[1].split("&nickname=")[0];
    // this.baseUrl.loginInfo.nickname=url.split("&nickname=")[1].split("#/serviceList")[0];

    // alert(url+'/r'+openid); 

  },
}
</script>

<style lang='less'>
  .van-nav-bar__arrow,.van-nav-bar__left span{
    color: black!important;
  }
  .conac_div{
    margin-top: 46px;
    border-bottom: 3px solid transparent;
    border-image:url(../static/img/iocn_colourmall.png) 3 round;
    background-color: white;
    padding-top: 15px;
    margin-bottom: 5px;
    .name_conac{
      padding-left:47px;
      font-size: 14px;
    }
    .long_a{
      .van-cell__title{
        margin: auto 10px!important;
      }
    }
  }
  .left_btn{
    border:1px solid gray;
    background-color: white;
    color: gray;
    margin-right: 10px;
  }
  .rig_butt{
    border:1px solid #e95c4d;
    background-color: white;
    color: #e95c4d;
  }
  .desc_cell{
    font-size: 12px;
    padding:5px 0;
    border: none;
  }
  .card_tags{
    line-height: 20px;
    .price_col1{
      font-size: 16px;
      color:#e95c4d;
      float: left;
      margin-right: 20px;
    }
    .ora_price{
      color:grey;
      text-decoration:line-through;
    }
  }
  .comm_div{
    .commt_pic{
      display: flex;
      padding: 5px 0;
      img{
        height:50px;width:50px;
        margin-right: 5px;
      }
    }
    font-size:14px;
    line-height: 25px;
    border-bottom:1px solid #ebedf0;
    padding: 10px 0;
    .commt_txt{
      color:gray;
    }
    .comm_cont{
      display: flex;
      justify-content: space-between;
    }
  }
</style>
