const trackMixin = {
  methods: {
    selectTrack () {
      this.$store.commit('setTrack', {
        track: this.track
      })
    }
  }
}

export default trackMixin
