import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
// 土司
import './mock/index'

import './assets/iconfont/iconfont.css'

import ui from '@/components/UI'
Vue.use(ui)

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
Vue.config.devtools = true
Vue.prototype.$http = axios

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
