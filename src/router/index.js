import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import test from '@/views/test'
import '../assets/styles/gl.css'
Vue.use(Router)

export default new Router({
  mode:'history',
  base:'/st/',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/privacypolicy',
      name: 'privacypolicy',
      component: () => import(/* webpackChunkName: "about" */ '../views/privacypolicy.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: test//() => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  ]
})

