<template lang="pug">
  .container
    km-spinner(v-show="loading")
    .columns
      .column.is-3.has-text-centered
        figure.media-left
          p.image
            img(:src="track.album.images[0].url")
          p
            a.button.is-primary(@click="selectTrack")
              icon(name="play")
      .colum.is-8
        .panel
          .panel-heading
            h1.title {{ track.name }}
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
  created () {
    this.loading = true
    const id = this.$route.params.id
    trackService.getById(id)
      .then(res => {
        this.track = res
        this.loading = false
      })
  }
}
</script>

<style lang="scss" scoped>
  .columns {
    margin: 20px;
  }
</style>

