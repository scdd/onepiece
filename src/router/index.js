import Vue from 'vue'
import Router from 'vue-router'
import mainContent from '@/components/mainContent'

Vue.use(Router)


export default new Router({
  mode: 'history',
  base: '/onepiece',
  routes: [
    {
      path: '/',
      name: 'mainContent',
      component: mainContent
    }
  ]
})
