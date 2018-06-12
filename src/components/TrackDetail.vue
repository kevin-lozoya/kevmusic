<template lang="pug">
  .container
    km-spinner(v-show="loading")

    .columns(v-if="!loading")
      .column.is-3.has-text-centered
        figure.media-left
          p.image
            img(:src="track.album.images[0].url")
          p.button-bar
            a.button.is-primary(@click="selectTrack")
              icon(name="play")
      .column.is-8
        .panel
          .panel-heading
            h1.title {{ trackTitle }}
          .panel-block
            article.media
              .media-content
                .content
                  ul(v-for="(v, k) in track")
                    li
                      strong {{ k }}:&nbsp;
                      span {{ v }}
                nav.level
                  .level-left
                    a.levet-item
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

import KmSpinner from '@/components/shared/Spinner.vue'
import trackMixin from '@/mixins/track'
import trackService from '@/services/track'

export default {
  mixins: [trackMixin],
  components: {
    KmSpinner
  },
  data () {
    return {
      track: {},
      loading: false
    }
  },
  computed: {
    ...mapState(['trackPlayer']),
    ...mapGetters(['trackTitle']),
    trackTitle () {
      return `${this.track.name} - ${this.track.artists[0].name}`
    }
  },
  methods: {
    ...mapActions(['getTrackById'])
  },
  created () {
    const id = this.$route.params.id

    if (!this.trackPlayer.id || this.trackPlayer.id !== id) {
      this.loading = true
      trackService.getById(id)
        .then((res) => {
          this.track = res
          this.loading = false
        })
    } else {
      this.track = this.trackPlayer
    }
  }
}
</script>

<style lang="scss" scoped>
  .columns {
    margin: 20px;
  }
  .button-bar {
    margin-top: 20px;
  }
</style>

