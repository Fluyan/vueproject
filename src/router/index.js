import Vue from 'vue'
import Router from 'vue-router'
import appfirst from '@/AppFirst'

Vue.use(Router)

import Bannermain from '../banner/bannermain'
import login from '../login/login'

import sure from '../sure/sure'
import study from '../study/study'
import life from '../life/life'
import about from '../about/about'
import time from '../time/time'
import messageboard from '../messageboard/messageboard'

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect:'/index',
    },
    {
      path: '/index',
      name: 'appfirst',
      component: appfirst
    },
    {
        path:"/Bannermain",
        name:'Bannermain',
        component:Bannermain
    },
    //denglu
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/sure',
      name: 'sure',
      component: sure
    },
    {
      path: '/study',
      name: 'study',
      component: study
    },
    {
      path: '/life',
      name: 'life',
      component: life
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/time',
      name: 'time',
      component: time
    },
    {
      path: '/messageboard',
      name: 'messageboard',
      component: messageboard
    },
  ]
})
