import Vue from 'vue'
import routes from '@/routes'
import App from '@/App.vue'

import EventBus from '@/plugins/event-bus'
import VueRouter from 'vue-router'
import msToMm from '@/filters/ms-to-mm'
import blur from '@/directives/blur'

import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

Vue.use(EventBus)
Vue.use(msToMm)
Vue.use(VueRouter)
Vue.use(blur)

const router = new VueRouter({ routes, mode: 'history' })

Vue.component('icon', Icon)

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
