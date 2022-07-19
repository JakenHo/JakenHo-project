import requests from './ajax'
import mockRequests from './mockAjax'

export const reqgetCategoryList = () => requests.get("http://39.98.123.211/api/product/getBaseCategoryList")

export const reqgetShopCar = () => requests.get("http://localhost:8080/jaken/shopCar")

export const reqgetStudents = () => requests.get("http://localhost:8080/jaken/students")

export const reqGetBannerList = () => mockRequests.get('/mock/banner')

export const reqFloorList = () => mockRequests.get('/mock/floor')

export function reqSearchList(data) {
    return requests({
        url: '/jaken/H/api/list',
        method: 'post',
        data
    })
}

//传入接口需要的手机号，返回验证码
export function reqUserCode(phone) {
    return requests({
        url: `/jaken/H/api/user/passport/sendCode/${phone}`,
        method: 'get',
    })
}

//传入接口需要的字段，字段名与参数名对应
export function reqUserRegister(phone, password, code) {
    return requests({
        url: '/jaken/H/api/user/passport/register',
        method: 'post',
        data: { phone, password, code }
    })
}

//  /api/user/passport/login      methos:post    phone password 
export function reqUserLogin(phone, password) {
    return requests({
        url: '/jaken/H/api/user/passport/login',
        method: 'post',
        data: { phone, password }
    })
}

export function reqUserInfo() {
    return requests({
        url: '/jaken/H/api/user/passport/auth/getUserInfo',
        method: 'get'
    })
}