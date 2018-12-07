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
import { Stepper } from 'vant';
import { Tab, Tabs } from 'vant';

Vue.config.productionTip = false

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
Vue.use(Stepper);
Vue.use(Tabs).use(Tab);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
