import Vue from 'vue'
import Router from 'vue-router'
//匯入檔案
import AppHome from '@/components/AppHome'
import AppLogin from '@/components/AppLogin'
import AppContact from '@/components/AppContact'
//vue Router
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppHome',
      component: AppHome
    },
    {
      path: '/login',
      name: 'AppLogin',
      component: AppLogin
    },
    {
      path: '/Contact',
      name: 'AppContact',
      component: AppContact
    }
  ]
})
