import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//Diretiva Global
Vue.directive('red', {
  inserted: function(el) {
    el.style.color = 'red'
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')