// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "./router/axios";
import VueAxios from "vue-axios";
import Element from "element-ui";
import i18n from './language';
import store from "./store";

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(VueAxios, axios);
Vue.use(router);
Vue.use(Element, {
  i18n: (key, value) => i18n.t(key, value)
});
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
