import Vue from 'vue'
import App from './App.vue'
import ComponentGlobalOne from '@/components/ComponentGlobalOne'
import ComponentGlobalTwo from '@/components/ComponentGlobalTwo'

import store from './store/store'
import router from './router/routes'
import './config/style'

Vue.config.productionTip = false

//definindo um componente como global
Vue.component('ComponentGlobalOne', ComponentGlobalOne)
Vue.component('ComponentGlobalTwo', ComponentGlobalTwo)

/* Guardas globais -> Verificam as rotas de toda aplicação
router.beforeEach((to, from, next) => {
    console.log(to, from)
    next()
})

router.afterEach(() => {
    console.log('Renderização ok')
})
*/

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
