import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login'
import user from './modules/user'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/',
    name: 'layout',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../layout'),
    redirect: '/home',
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('../views/Home')
      },
      {
        path: '/404',
        name: '404',
        component: () => import('../views/404')
      }
    ]
  },
  // {
  //   path: '/sys/users',
  //   name: 'users',
  //   component: () => import('../views/users')
  // },
  // {
  //   path: '/sys/roles',
  //   name: 'roles',
  //   component: () => import('../views/roles')
  // },
  // {
  //   path: '/sys/menus',
  //   name: 'menus',
  //   component: () => import('../views/menus')
  // }
  user
]

const router = new VueRouter({
  routes
})

export default router
