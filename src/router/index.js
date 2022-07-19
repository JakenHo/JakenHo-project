// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import User from '../pages/User'
import MyIndex from '../pages/MyIndex'
import ShopCar from '../pages/ShopCar'
import Brand from '../pages/Brand'
import Service from '../pages/Service'
import P1 from '../pages/poduct-list/P1'
import P2 from '../pages/poduct-list/P2'
import P3 from '../pages/poduct-list/P3'
import MyNotepad from '../pages/MyNotepad'
import Search from '../pages/Search'

//创建并暴露一个路由器
export default new VueRouter({
    routes: [{
        path: '/',
        component: MyIndex,
        meta: { show: true }
    }, {
        name: 'user',
        path: '/user/:keyword?',
        component: User,
        meta: { show: false }
    }, {
        path: '/myindex',
        component: MyIndex,
        meta: { show: true }
    }, {
        path: '/shopcar',
        component: ShopCar,
        meta: { show: false }
    }, {
        path: '/brand',
        component: Brand,
        meta: { show: true }
    }, {
        path: '/service',
        component: Service,
        meta: { show: true }
    }, {
        path: '/p1',
        component: P1,
        meta: { show: true }
    }, {
        path: '/p2',
        component: P2,
        meta: { show: true }
    }, {
        path: '/p3',
        component: P3,
        meta: { show: true }
    }, {
        path: '/search',
        component: Search,
        meta: { show: false }
    }
    ]
})