import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Detail from '../pages/goodsDetail'
import Msg from '../components/Message.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: resolve => require(['../pages/home'], resolve),
      meta: {
        title: 'home'
      }
    },
    {
      path: '/msg',
      component: Msg
    },
    {
      path: '/detail',
      component: Detail,
      children: [
        {
          path: 'msg',
          component: Msg
        }
      ]
    }
  ]
})
