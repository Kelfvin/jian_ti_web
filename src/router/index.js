import Vue from "vue"
import VueRouter from "vue-router"
import LoginPage from "../view/login_register/login"
import MainPage from "../view/main"
import SelfPage from "../view/userinfo"
import ProblemsPage from "../view/problemPage/problems"
import ProblemsDescribe from "../view/problemPage/problemDescribe"
import payCheck from "../view/payCheck";
import ProblemsComment from "../view/problemPage/problemComment"
import CardList from "../view/TestMarket/CardList"
import DetailPage from "../view/TestMarket/DetailPage"
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
                    // 这个子路由是题目界面的路由，别塞我这儿了
                    path: '/problems',
                    component: ProblemsPage,
                    children:[
                        {
                            path:'describe',
                            component:ProblemsDescribe
                        },{
                            path:'comment',
                            component: ProblemsComment
                        }
                    ]
                },
                {
                    path:'/userinfo',
                    component: SelfPage
                },
                {
                    path:'/payCheck',
                    component:payCheck
                },{
                    path:'/CardList',
                    component: CardList
                },{
                    path:'/CardList/Detail',
                    component: DetailPage
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