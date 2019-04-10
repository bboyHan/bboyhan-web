import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import MarkWall from '@/components/home/MarkWall'

import Article from '@/components/article/Article'

import Login from '@/components/login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: '主页',
      component: Home,
      children: [
        {
          path: '/markwall',
          name: '过往印记',
          component: MarkWall
        },
        {
          path: '/article',
          name: '技术杂文',
          component: Article
        }
      ]
    },
    {
      path: '/login',
      name: '用户登录',
      component: Login
    },
  ]
})
