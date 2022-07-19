import { reqgetShopCar } from '../api'
// import axios from 'axios'

const state = {
    shopCarList: []
}

const actions = {
    async getShopCar({ commit }) {//{{commit}}解构出存在于context中的变量
        //await 右边必须是一个Promise对象，返回一个成功的值
        let result = await reqgetShopCar()
        commit("GETSHOPCAR", result)

    }

    // getShopCar({ commit }) {
    //     axios.get('http://localhost:8080/jaken/shopCar').then(
    //         response => {
    //             commit('GETSHOPCAR', response.data)
    //         }
    //     )
    // }
}
const mutations = {
    GETSHOPCAR(state, value) {
        state.shopCarList = value
    }
}

const getters = {

}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
