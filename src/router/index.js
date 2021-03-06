import Vue from 'vue'
import Router from 'vue-router'

import Top from '@/components/Top'
import Output from '@/components/Output'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      name: 'Top',
      component: Top
    },

    {
      path: '/Output',
      name: 'Output',
      component: Output
    },

    { path: '/About',
      name: 'About',
      component: About
    },
    ]
})
