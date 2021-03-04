import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
require('@/assets/main.scss');
import Vuelidate from 'vuelidate'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
Vue.use(Vuelidate)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
