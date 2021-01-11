import Vue from 'vue'
import App from './App.vue'
import router from './router'

import axios from 'axios'
import vueAxios from 'vue-axios'

Vue.use(vueAxios, axios)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
