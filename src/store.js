import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    trackPlayer: {}
  },
  mutations: {
    setTrack (state, payload) {
      state.trackPlayer = payload.track
    }
  },
  actions: {
  },
  getters: {
  }
})

export default store
