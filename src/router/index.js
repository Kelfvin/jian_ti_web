import Vue from "vue"
import VueRouter from "vue-router"
import LoginPage from "../view/login"
import MainPage from "../view/main"
import RigisterPage from "../view/rigister"
import SelfPage from "../view/userinfo"

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
                }
            ]
        },
        {
            path: '/login',
            component: LoginPage
        },
        {
            path: '/rigister',
            component: RigisterPage
        }
    ]
}
)

export default router