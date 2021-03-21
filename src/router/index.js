import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import examples from '../views/Examples.vue'
import SpiderEx from '../views/SpiderEx.vue'
import disappearingText from '../views/DisappearingText.vue'
import ImageHoverEffect from '../views/ImageHoverEffect.vue'
import ScrollEffect from '../views/ScrollEffect.vue'
import ImageFlipEffect from '../views/ImageFlipEffect.vue'
import DotsCSSPreloader from '../views/DotsCSSPreloader.vue'
import CSSCardHoverEffect from '../views/CSSCardHoverEffect.vue'
import ImageAppearingAnimation from '../views/ImageAppearingAnimation.vue'
import Error404 from '../views/Error404.vue'
import ClipPathImageEffect from '../views/ClipPathImageEffect.vue'

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
    path: '/Spider',
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
  },
  {
    path: '/ImageAppearingAnimation',
    name: 'ImageAppearingAnimation',
    component: ImageAppearingAnimation
  },
  {
    path: '/Error404',
    name: 'Eror404',
    component: Error404
  },
  {
    path: '/ClipPathImageEffect',
    name: 'ClipPathImageEffect',
    component: ClipPathImageEffect
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
