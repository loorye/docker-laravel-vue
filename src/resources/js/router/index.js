import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Home from '../components/Home.vue'
import ExampleComponent from '../components/ExampleComponent.vue';

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/example',
      name: 'example',
      component: ExampleComponent
    },
  ]
})
