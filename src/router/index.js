import Vue from "vue"
import VueRouter from "vue-router"

import LoginPage from "../view/login"
import MainPage from "../view/main"
// 声明常量

Vue.use(VueRouter)

const router = new VueRouter({
    mode:'history',
    routes: [
        {
            path: '/',
            component: MainPage
        },
        {
            path: '/login',
            component: LoginPage
        },
    ]
}
)

export default router