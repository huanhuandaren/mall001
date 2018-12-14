<template>
  <div class="address">
    <van-nav-bar fixed
      title="收货地址"
      left-arrow
      @click-left="onClickLeft"
    />

    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      @add="onAdd"
      @edit="onEdit"
      @select='chose'
    >
      <div class="conac_div" slot='top' >
        <div class="name_conac">{{choseAddress.name}} {{choseAddress.tel}}</div>
        <van-cell class="long_a">
          <van-radio-group v-model="checked"  slot="icon">
            <van-radio name="1"  checked-color="#FF4444" ></van-radio>
          </van-radio-group>
          <div slot='title'>{{choseAddress.address}}</div>
          <van-icon name="edit" slot="right-icon" size='20px' @click='onEdit(choseAddress)' />
        </van-cell>
      </div>
    </van-address-list>

  </div>
</template>

<script>
export default {
  data () {
    return {
      choseAddress:{},
      checked:'1',
      chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号'
        }
      ],
    }
  },
  methods:{
    chose(val){
      this.choseAddress=val;
    },
    onClickLeft(){
      this.$router.go(-1);
    },
    onAdd() {
      this.$router.push({
        name:'editAddress',
        params:{
          tit:'新增地址'
        }
      })
    },
    onEdit(item, index) {
      this.$router.push({
        name:'editAddress',
        params:{
          data:item,
          tit:'编辑地址'
        }
      })
    },
 
  },
  mounted() {
    this.choseAddress=this.list[0];
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.address{
  background-color: #eeeeee;
  .van-address-list{
    padding: 0;
  }

}
</style>
