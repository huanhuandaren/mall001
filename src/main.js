import Vue from 'vue'
import App from './App'
import router from './router'
import { Tabbar, TabbarItem } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Lazyload } from 'vant';
import { NavBar } from 'vant';
import { Search } from 'vant';
import { Icon } from 'vant';
import { Row, Col } from 'vant';
import { SubmitBar } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';
import { Card } from 'vant';
import { Button } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Tab, Tabs } from 'vant';
import { List } from 'vant';
import { Toast } from 'vant';
import {
  GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn
} from 'vant';
import { Rate } from 'vant';
import { Sku } from 'vant';
import { Switch } from 'vant';
import { AddressList } from 'vant';
import { RadioGroup, Radio } from 'vant';
import { AddressEdit } from 'vant';
import { Field } from 'vant';
import { Uploader } from 'vant';

Vue.use(Uploader);
Vue.use(Field);
Vue.use(AddressEdit);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(AddressList);
Vue.use(Switch);
Vue.use(Sku);
Vue.use(Rate);
Vue.use(Tabbar).use(TabbarItem);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Lazyload);
Vue.use(NavBar);
Vue.use(Search);
Vue.use(Icon);
Vue.use(Row).use(Col);
Vue.use(SubmitBar);
Vue.use(Checkbox).use(CheckboxGroup);
Vue.use(Card);
Vue.use(Button);
Vue.use(Cell).use(CellGroup);
Vue.use(Tabs).use(Tab);
Vue.use(List);
Vue.use(Toast);
Vue
  .use(GoodsAction)
  .use(GoodsActionBigBtn)
  .use(GoodsActionMiniBtn);

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
