import Vue from 'vue'
import Router from 'vue-router'
import appfirst from '@/AppFirst'

Vue.use(Router)


import login from '../login/login'

//产品介绍
import Productcenter from '../productintroduce/productcenter'
import Portraitintroduce from '../productintroduce/portraitintroduce'
import Recommendintroduce from '../productintroduce/recommendintroduce'
import Riskintroduce from '../productintroduce/riskintroduce'
import Locateintroduce from '../productintroduce/locateintroduce'
import Technologyintroduce from '../productintroduce/technologyintroduce'

//解决方案
import Solutionmain from '../solution/solutionmain'
import Intelligent from '../solution/intelligent'
import Riskcontrol from '../solution/riskcontrol'

//服务支持
import Service from '../service/service'
import Productintroduction from '../service/productintroduction'
import Handbook from '../service/handbook'
import Expertservice from '../service/expertservice'
import Caseconsultation from '../service/caseconsultation'

//关于我们
import about from '../about/about'

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
    //denglu
    {
      path: '/login',
      name: 'login',
      component: login
    },
    //产品中心
    {
      path: '/productcenter',
      component: Productcenter,
      redirect:'/productcenter/portraitintroduce',
      children:[
        {
          path:'portraitintroduce',
          component:Portraitintroduce
        },
        {
          path:'recommendintroduce',
          component:Recommendintroduce
        },
        {
          path:'riskintroduce',
          component:Riskintroduce
        },
        {
          path:'locateintroduce',
          component:Locateintroduce
        },
        {
          path:'technologyintroduce',
          component:Technologyintroduce
        }
      ]
    },
    //解决方案
    {
      path: '/solution',
      component: Solutionmain,
      redirect:'/solution/intelligent',
      children:[
        {
          path:'intelligent',
          component:Intelligent
        },
        {
          path:'riskcontrol',
          component:Riskcontrol
        }
      ]
    },
    //服务支持
    {
      path: '/service',
      component: Service,
      redirect:'/service/productintroduction',
      children:[
        {
          path:'productintroduction',
          component:Productintroduction
        },
        {
          path:'handbook',
          component:Handbook
        },
        {
          path:'expertservice',
          component:Expertservice
        },
        {
          path:'caseconsultation',
          component:Caseconsultation
        }
      ]
    },
    //关于我们
    {
      path: '/about',
      name: 'about',
      component: about
    },
    
  ]
})
