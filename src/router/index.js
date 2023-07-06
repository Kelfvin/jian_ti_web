import Vue from "vue"
import VueRouter from "vue-router"
import LoginPage from "../view/login_register/login"
import MainPage from "../view/main"
import SelfPage from "../view/userinfo"
import ProblemsPage from "../view/problems"
import payCheck from "../view/payCheck";

// 声明常量

Vue.use(VueRouter)

const router = new VueRouter({
    mode:'history',
    routes: [
        {
            path: '/',
            component: MainPage,
            children:[
            // 存放Main页面嵌套路由
                {
                    path: '/problems',
                    component: ProblemsPage
                },
                {
                    path:'/userinfo',
                    component: SelfPage
                },
                {
                    path:'/payCheck',
                    component:payCheck
                }
            ]
        },
        {
            path: '/login',
            component: LoginPage
        },
    ]
}
)

export default router