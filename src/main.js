import Vue from 'vue'
import App from '@/App.vue'

import EventBus from '@/plugins/event-bus'

import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

Vue.use(EventBus)

Vue.component('icon', Icon)

new Vue({
  el: '#app',
  render: h => h(App)
})
