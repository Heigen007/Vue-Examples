import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import examples from '../views/Examples.vue'
import SpiderEx from '../views/SpiderEx.vue'
import disappearingText from '../views/disappearingText.vue'
import ImageHoverEffect from '../views/ImageHoverEffect.vue'
import ScrollEffect from '../views/ScrollEffect.vue'
import ImageFlipEffect from '../views/ImageFlipEffect.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/examples',
    name: 'Examples',
    component: examples
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
  {
    path: '/ImageHoverEffect',
    name: 'ImageHoverEffect',
    component: ImageHoverEffect
  },
  {
    path: '/ScrollEffect',
    name: 'ScrollEffect',
    component: ScrollEffect
  },
  {
    path: '/ImageFlipEffect',
    name: 'ImageFlipEffect',
    component: ImageFlipEffect
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
