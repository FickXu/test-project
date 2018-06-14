import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import * as actions from './action.js'
import * as mutations from './mutation.js'
import * as Login from './module/login'

console.log('store/index.js>>>>', mutations, Login)


const state = {
    // 当前登录用户
    loginUser: {}
}
export default new Vuex.Store({
    state,
    actions: actions,
    mutations: mutations.default,
    modules: {
        Login: Login.default
    }
})
