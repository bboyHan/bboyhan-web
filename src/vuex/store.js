import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

Vue.use(Vuex)

// 用户初始状态
const state = {
  currentUser: null,
  isLogin: false,
  token: sessionStorage.getItem('userToken') ? sessionStorage.getItem('userToken') : ''
}

// 创建 store 实例
const store = new Vuex.Store({
  actions,
  getters,
  state,
  mutations
})

export default store
