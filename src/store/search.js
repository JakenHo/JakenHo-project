import { reqgetCategoryList, reqGetBannerList, reqFloorList, reqSearchList } from '../api'

const state = {
    categoryList: [],
    bannerList: [],
    floorList: [],
    searchList: {}
}

const actions = {
    async getCategory({ commit }) {
        let result = await reqgetCategoryList()
        commit("GETCATEGORY", result.data)
        console.log('请求回来的数组数据:', result.data);
    },
    async getBannerList({ commit }) {
        let result = await reqGetBannerList()
        if (result.code === 200) {
            commit('GETBANNERLIST', result.data)
        }
    },
    async getFloorList({ commit }) {
        let result = await reqFloorList()
        if (result.code === 200) {
            commit('GETFLOORLIST', result.data)
        }
    },
    async getSearchList({ commit }, data) {
        let result = await reqSearchList(data)
        if (result.code === 200) {
            commit("GETSEARCHLIST", result.data)
            console.log('searchList:', result.data);
        }
    }
}
const mutations = {
    GETCATEGORY(state, value) {
        state.categoryList = value
    },
    GETBANNERLIST(state, value) {
        state.bannerList = value
        console.log(value);
    },
    GETFLOORLIST(state, value) {
        state.floorList = value
    },
    GETSEARCHLIST(state, value) {
        state.searchList = value
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