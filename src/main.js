import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = true

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
