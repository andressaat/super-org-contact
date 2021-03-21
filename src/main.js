import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
// import GoogleOption from './client_id.json'
// import GoogleOption from './people_api.json'
import GoogleOption from './client_id_2.json'

import VueGapi from 'vue-gapi'

Vue.use(VueGapi, {
  apiKey: GoogleOption.web.api_key,
  clientId: GoogleOption.web.client_id,
  discoveryDocs: GoogleOption.web.discoveryDocs,
  scope: GoogleOption.web.scope
})

Vue.use(VueMaterial)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
