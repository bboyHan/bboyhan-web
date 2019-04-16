// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import store from './vuex/store'

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

axios.defaults.withCredentials = true
axios.defaults.headers.common['Authorization'] = store.state.token


/*
router.beforeEach((to, from, next) => {
  if (to.path === '/login'||to.path === '/user') {
    next();
  }else {
    let token = sessionStorage.getItem('userToken')
    if (token === 'null' || token === '' || token === null) {
      console.log(to.fullPath)
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    } else {
      next();
    }
  }
})*/

axios.interceptors.request.use(function (config){
  if (store.state.token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
    // config.headers.Authorization = token +Bearer;
    config.headers.Authorization = `Bearer ${store.state.token}`;
  }
  return config;
},function (error) {
  return Promise.reject(error);
});

//http 响应拦截器
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 这里写清除token的代码
          sessionStorage.setItem("userToken",null);
          sessionStorage.setItem("username",null);
          console.log(router.currentRoute.fullPath)
          router.replace({
            path: '/login',
            query: {redirect: router.currentRoute.fullPath}//登录成功后跳入浏览的当前页面
          })
      }
    }
    return Promise.reject(error.response)
  });


new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
