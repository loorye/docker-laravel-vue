import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import ExampleComponent from '../components/ExampleComponent.vue'

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'ExampleComponent',
      component: ExampleComponent
    },
  ]
})
