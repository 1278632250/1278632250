import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import parent from '@/components/props|emit/parent'
import emit from '@/components/props|emit/emit'
import lifeCycle from '@/components/lifeCycle'
import asyncs from '@/components/asyncs'
import canv from '@/components/canv'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '/',
      component: lifeCycle
    },
    {
      path: '/index',
      name: '/index',
      component: index
    },
    {
      path: '/emit',
      name: '/emit',
      component: emit
    },
    {
      path: '/parent',
      name: '/parent',
      component: parent
    },
    {
      path: '/asyncs',
      name: 'asyncs',
      component: asyncs
    },
    {
      path: '/canv',
      name: 'canv',
      component: canv
    },


  ]
})
