/*
 * @Author: Yokee
 * @Date: 2020-11-28 00:39:04
 * @LastEditTime: 2020-11-28 09:30:27
 * @FilePath: \vegetables\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Lose from '../views/Lose.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path:'*',
    component:Lose,
  }
]

const router = new VueRouter({
  routes
})

export default router
