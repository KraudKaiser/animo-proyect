import Vue from 'vue'
import vuetifiy from '@/plugins/vuetifiy'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  vuetifiy,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
