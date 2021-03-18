import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import about from '../views/About.vue'
import SpiderEx from '../views/SpiderEx.vue'
import disappearingText from '../views/disappearingText.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: about
  },
  {
    path: '/spider',
    name: 'Spider',
    component: SpiderEx
  },
  {
    path: '/disappearingText',
    name: 'disappearingText',
    component: disappearingText
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
