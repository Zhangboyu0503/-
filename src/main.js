import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/css/reset.css'

import FastClick from 'fastclick'
FastClick.attach(document.body);

import './assets/css/iconfont.css'

import './assets/js/font'

//引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
import './assets/css/swiper.css'
//引入动画库
import animate from 'animate.css'
//引入axios
import axios from 'axios'
Vue.prototype.axios = axios


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')