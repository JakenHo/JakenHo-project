import { reqgetStudents } from '../api'
const state = {
    students: []
}

const actions = {
    async getstudent({ commit }) {
        let result = await reqgetStudents()
        if (result.code == 200) {
            commit("GETSTUDENT", result.data)
        }
    }
}
const mutations = {
    GETSTUDENT(state, value) {
        state.students = value
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