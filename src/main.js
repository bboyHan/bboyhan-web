// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'

import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import echarts from 'echarts'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.prototype.$echarts = echarts

Vue.use(ElementUI)
Vue.use(mavonEditor)
Vue.use(Vuex)

require('./mock'); //引入mock数据，关闭则注释该行

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
