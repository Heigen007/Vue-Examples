import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import examples from '../views/Examples.vue'
import SpiderEx from '../views/SpiderEx.vue'
import disappearingText from '../views/disappearingText.vue'
import ImageHoverEffect from '../views/ImageHoverEffect.vue'
import ScrollEffect from '../views/ScrollEffect.vue'
import ImageFlipEffect from '../views/ImageFlipEffect.vue'
import DotsCSSPreloader from '../views/DotsCSSPreloader.vue'
import CSSCardHoverEffect from '../views/CSSCardHoverEffect.vue'
import ImageAppearingAnimation from '../views/ImageAppearingAnimation.vue'

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
  },
  {
    path: '/DotsCSSPreloader',
    name: 'DotsCSSPreloader',
    component: DotsCSSPreloader
  },
  {
    path: '/CSSCardHoverEffect',
    name: 'CSSCardHoverEffect',
    component: CSSCardHoverEffect
  }
  ,
  {
    path: '/ImageAppearingAnimation',
    name: 'ImageAppearingAnimation',
    component: ImageAppearingAnimation
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
