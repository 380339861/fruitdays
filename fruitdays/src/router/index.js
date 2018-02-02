import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Classification from '@/components/Classification'
import Detail from '@/components/Detail'
import Login from '@/components/Login'
import User from '@/components/User'
import Cart from '@/components/Cart'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Classification',
      name: 'Classification',
      component: Classification
    },
    {
      path: '/detail/:fid',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/User',
      name: 'User',
      component: User
    },
    {
      path: '/Cart',
      name: 'Cart',
      component: Cart
    }
    
  ]
})
