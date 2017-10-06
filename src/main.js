// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-teal.css' // 使用 teal 主题
import App from './App'
import router from './router'
import axios from 'axios'
import VueLazyLoad from 'vue-lazyload'

Vue.use(MuseUI)



Vue.use(axios); //使用axios，并设置vue的原型方法
Vue.prototype.$http = axios


Vue.use(VueLazyLoad, {
  loading: require('./assets/Loading_icon.gif')
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
