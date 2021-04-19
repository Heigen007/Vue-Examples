import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueTilt from 'vue-tilt.js'
import feather from 'vue-icon'
import './registerServiceWorker'

Vue.use(feather, 'v-icon')
Vue.use(VueTilt)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
