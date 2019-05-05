import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/page/index'
import login from '@/components/page/login/login'
import registered from '@/components/page/login/registered'
import myCenter from '@/components/common/myCenter'

import spots from '@/components/page/spots/all'//买门票
import spotsList from '@/components/page/spots/list'//门票列表
import spotsDetails from '@/components/page/spots/details'//门票列表

import hotels from '@/components/page/hotels/all'//酒店
import foods from '@/components/page/foods/all'//美食
import lines from '@/components/page/lines/all'//路线
import guiders from '@/components/page/guiders/all'//导游
import cars from '@/components/page/cars/all'//租车
import specialty from '@/components/page/specialty/all'//特产
import raiders from '@/components/page/raiders/all'//攻略



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: index
    },{
    		path:'/myCenter',
    		name: '个人中心',
      component: myCenter
    },{
    		path:'/login',
    		component:login,
    		name:'登录'
    },{
    		path:'/registered',
    		component:registered,
    		name:'注册'
    },{
    		path:'/spots/all',
    		component:spots,
       name:'门票',
    },{
    		path:'/spots/spotsDetails',
    		component:spotsDetails,
    		name:'买门票'
    },{
    		path:'/spots/spotsList',
    		component:spotsList,
    		name:'门票列表'
    },{
    		component:hotels,
    		path: '/hotels/all',
    		name:'订酒店',
    },{
      path: '/foods/all',
      component: foods,
      name:'美食',
    },{
      path: '/lines/all',
      component: lines,
      name:'路线',
    },{
      path: '/guiders/all',
      component: guiders,
      name:'导游',
    },{
      path: '/cars/all',
      component: cars,
      name:'租车',
    },{
      path: '/specialty/all',
      component: specialty,
      name:'特产',
    },{
      path: '/raiders/all',
      component: raiders,
      name:'攻略',
    }
  ]
})
