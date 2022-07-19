import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import router from './router';
import Vuex from 'vuex'
import store from './store';
// import * as API from './api';
import '../src/mock/mockServe'
import 'swiper/css/swiper.css'
import 'jquery/dist/jquery.min'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import { Button } from 'element-ui'

Vue.component(Button.name, Button)

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)
// const demo = Vue.extend()
// const d = new demo()
// Vue.prototype.x = d

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  beforeCreate() {
    Vue.prototype.$bus = this
    // Vue.prototype.$API = API;
  }
})
