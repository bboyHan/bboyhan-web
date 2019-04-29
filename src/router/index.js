import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import MarkWall from '@/components/home/MarkWall'
import JoinUs from '@/components/home/JoinUs'

import Article from '@/components/article/Article'
import ArticleList from '@/components/article/ArticleList'

import Login from '@/components/login/Login'
import Register from '@/components/login/Register'

import UserInfo from '@/components/user/UserInfo'

import ShareList from '@/components/share/ShareList'
import Share from '@/components/share/Share'

import DataView from '@/components/dataview/DataView'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/article',
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
          component: ArticleList,
          children: [

          ]
        },
        {
          path: '/article/:id',
          name: '文章',
          component: Article
        },
        {
          path: '/user',
          name: '个人中心',
          component: UserInfo
        },
        {
          path: '/join',
          name: '加入我们',
          component: JoinUs
        },
        {
          path: '/share',
          name: '资源分享',
          component: ShareList
        },

      ]
    },
    {
      path: '/login',
      name: '用户登录',
      component: Login
    },
    {
      path: '/register',
      name: '用户注册',
      component: Register
    },
    {
      path: '/share/:id',
      name: '资源',
      component: Share
    },
    {
      path: '/dataview',
      name: '数据分析',
      component: DataView
    }
  ]
})


export default router
