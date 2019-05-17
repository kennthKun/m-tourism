// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import axios from 'axios'

Vue.use(MintUI)
Vue.config.productionTip = false
import '@/assets/reset.css'
import '@/assets/animate.min.css'
/* eslint-disable no-new */


//axios.defaults.baseURL = 'api/';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
router.beforeEach((to,from,next)=>{
	console.log("befor each invoked")
	if(localStorage.getItem('userInfo') || to.fullPath === '/login' ||to.fullPath === '/'||to.fullPath === '/registered'){
		next()
	}else{
		next('/login')
	}
//	next()
})

Vue.prototype.axios = axios;

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
