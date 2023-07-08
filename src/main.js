import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import axios from 'axios';

export const EventBus = new Vue()

// 配置请求的根路径

axios.defaults.baseURL = 'http://127.0.0.1:3000/front_api/'

axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem("token")
  return config
})



axios.interceptors.response.use(response => {
  return response
})

// 原型件，在任何地方都可以使用，不用创建对象
Vue.prototype.$http = axios


Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
