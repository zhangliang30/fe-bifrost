import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './plugins/element.js'
import './assets/css/global.css'

// axios.defaults.baseURL = "http://101.132.195.170:7777/"
axios.defaults.baseURL = "http://localhost:7777/"
// 设置请求类型为json
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
// 添加请求拦截器
axios.interceptors.request.use(
	config => {
		config.headers.Authorization = window.sessionStorage.getItem('token')
		if (config.method === 'post') {
      		config.data = JSON.stringify(config.data)
		}
		return config
	},
	error => {
		console.log(error)
		Promise.reject(error)
	}
)

// http协议工具包
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
