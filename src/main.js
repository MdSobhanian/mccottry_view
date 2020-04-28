// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
window.axios = require('axios');
// Vue.use(axios)

import VueSocketIO from 'vue-socket.io'

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://3.15.187.108:3000',
  vuex: {
    // store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_'
  },
  // options: { path: "/my-app/" } //Optional options
}))
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
