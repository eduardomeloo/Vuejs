import Vue from 'vue'
import App from './App.vue'
import ComponentGlobalOne from '@/components/ComponentGlobalOne'
import ComponentGlobalTwo from '@/components/ComponentGlobalTwo'

import './config/style'

Vue.config.productionTip = false

//definindo um componente como global
Vue.component('ComponentGlobalOne', ComponentGlobalOne)
Vue.component('ComponentGlobalTwo', ComponentGlobalTwo)

new Vue({
  render: h => h(App),
}).$mount('#app')
