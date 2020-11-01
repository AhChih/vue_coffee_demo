import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import $ from 'jquery'
import VueSweetalert2 from 'vue-sweetalert2'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css'

Vue.use(VueSweetalert2)
Vue.component('Loading', Loading)
Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.prototype.$ = $
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
