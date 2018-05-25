import Vue from 'vue'
/*global Vue*/
import Router from 'vue-router'
import {
  Home,
  SymptomSearch,
  Test
} from '@/page'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/test',
      component: Test
    },
    {
      path: '/symptom-search',
      name: 'SymptomSearch',
      component: SymptomSearch
    }
  ]
})
