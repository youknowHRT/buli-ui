import Vue from 'vue'
import App from './App.vue'
import BuliUi from '../packages'
Vue.use(BuliUi)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
