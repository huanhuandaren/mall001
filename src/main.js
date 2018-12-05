import Vue from 'vue'
import App from './App'
import router from './router'
import { Tabbar, TabbarItem } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Lazyload } from 'vant';
import { NavBar } from 'vant';
import { Search } from 'vant';
import { Icon } from 'vant';

Vue.config.productionTip = false

Vue.use(Tabbar).use(TabbarItem);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Lazyload);
Vue.use(NavBar);
Vue.use(Search);
Vue.use(Icon);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
