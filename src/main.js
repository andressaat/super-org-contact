import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import GoogleAuth from './config/google-auth.js'
import GoogleOption from './client_id.json'

console.log('GoogleOption: ', GoogleOption)

Vue.use(GoogleAuth, GoogleOption.web)

Vue.use(VueMaterial)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
