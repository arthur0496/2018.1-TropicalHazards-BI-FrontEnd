import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import mainpage from '@/components/mainpage'
import RichUser from '@/components/RichUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'home page',
      component: mainpage
    },
    {
      path: '/user',
      name: 'user page',
      component: RichUser
    }
  ]
})
