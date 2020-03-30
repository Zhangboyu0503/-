import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let abc = '北京'
abc = localStorage.city

export default new Vuex.Store({
    state: {
        cityName: abc
    },
    mutations: {
        changeCity(state, city) {
            state.cityName = city
            localStorage.city = city
        }
    },
    actions: {},
    modules: {}
})