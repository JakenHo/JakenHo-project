import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import shopCar from './shopCar'
import students from './students'
import search from './search'
import user from './user'
export default new Vuex.Store({
    modules: {
        shopCar,
        students,
        search,
        user
    }
})