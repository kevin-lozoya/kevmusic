<template lang="pug">
  .content(v-if="trackPlayer && trackPlayer.album")
    p
      img(:src="trackPlayer.album.images[0].url")
    p
      strong {{ trackPlayer.name }} 
      small [{{ trackPlayer.duration_ms | ms-to-mm}}]
    p
      audio(controls, autoplay, :src="trackPlayer.preview_url", )
</template>

<script>
import trackMixin from '@/mixins/track'
import { mapState } from 'vuex'

export default {
  mixins: [trackMixin],
  computed: {
    ...mapState(['trackPlayer'])
  }
}
</script>

<style lang="scss" scoped>
  img {
    width: 128px;
    border-radius: 50%;
  }
</style>
