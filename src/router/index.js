import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import '../assets/styles/gl.css'
Vue.use(Router)
export default new Router({
  mode:'history',
  base:process.env.VUE_APP_BASE_PATH||'/',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
  ]
})

