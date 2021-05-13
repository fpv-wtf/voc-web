import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import router from "./router/fpvRouter";

import BlackDashboard from "./plugins/blackDashboard";

import store from './store'

Vue.use(BlackDashboard)
Vue.use(router)
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
