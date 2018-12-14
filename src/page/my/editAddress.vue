<template>
  <div class="editAddress">
    <van-nav-bar fixed
      :title="params.tit"
      left-arrow
      @click-left="onClickLeft"
    />

    <van-address-edit style="margin-top:46px"
       :address-info='params.data'
      :area-list="areaList"
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
 
  </div>
</template>

<script>
import areaList from '../../../node_modules/vant/packages/area/demo/area.js';

export default {
  data () {
    return {
      areaList: areaList,
      searchResult: [],
      params:{},
    }
  },
  methods:{
    onClickLeft(){
      this.$router.go(-1);
    },
    onSave() {
      this.$toast('保存成功');
      let that=this;
      setTimeout(function(){
        that.$router.push({
          name:'address',
          params:{ }
        })
      },1000)
     
    },
    onDelete() {
      this.$toast('删除成功');
      let that=this;
      setTimeout(function(){
        that.$router.push({
          name:'address',
          params:{ }
        })
      },1000)
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }];
      } else {
        this.searchResult = [];
      }
    },
    
  },
  mounted(){
    this.params=this.$route.params;
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.editAddress{
  
}
</style>
