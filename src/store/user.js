import { reqUserCode, reqUserRegister, reqUserLogin, reqUserInfo } from '../api'
const state = {
    code: "",
    token: "",
    userInfo: ""
}

const mutations = {
    //验证码
    GETUSERCODE(state, code) {
        state.code = code
        console.log(state.code);
    },
    //下发token
    GETUSERLOGIN(state, token) {
        state.token = token
        console.log(state.token);
    },
    //用户登录信息
    GETUSERINFO(state, userInfo) {
        state.userInfo = userInfo
        console.log(state.userInfo);
    }
}

const actions = {
    //获取验证码
    async getUserCode({ commit }, phone) {
        let result = await reqUserCode(phone)
        if (result.code === 200) {
            commit('GETUSERCODE', result.data)
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    //用户注册
    //组件传入变量可以用形参接收，但是传入对象，需保持名称的一致(不更改)
    async getUserRegister({ commit }, { userName, userPwd, code }) {
        let result = await reqUserRegister(userName, userPwd, code)
        if (result.code === 200) {
            alert('注册成功！！！')
            return 'ok'
        } else {
            alert(result.message)
            return Promise.reject(result.message)
        }
    },
    //登录业务
    //传入用户名和密码实现登录验证，服务器下发token
    async getUserLogin({ commit }, { userName, userPwd }) {
        let result = await reqUserLogin(userName, userPwd)
        if (result.code === 200) {
            console.log(result.data);
            commit('GETUSERLOGIN', result.data.token)
        }
    },
    //获取用户信息
    async getUserInfo({ commit }) {
        let result = await reqUserInfo()
        if (result.code === 200) {
            commit('GETUSERINFO', result.data)
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }

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
