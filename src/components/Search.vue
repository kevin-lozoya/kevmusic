<template lang="pug">
  main
    transition(name="move")
      km-notification(v-show="showNotification", :typeNotification="typeNotification")
        p(slot="body") {{ searchMessage }}

    section.section
      nav.nav.has-shadow
        .container
          input.input(
            type="text", 
            placeholder="Buscar canciones", 
            v-model="searchQuery",
            @keyup.enter="search")
          a.button.is-info(@click="search") Buscar
          a.button.is-danger(@click="cancel") &times;
      
      .container
        p {{ searchMessage }}
      
      transition(name="move")
        km-spinner(v-show="loading")

      .container(v-show="!loading")
        .columns.is-multiline
          .column.is-one-quarter(v-for="t in tracks")
            km-track(:track="t", @select="playMusic", 
              :class="{ 'is-active' : t.id === selectedTrack }",
              v-blur="t.preview_url")
      
</template>

<script>
import KmTrack from '@/components/Track.vue'
import KmNotification from '@/components/shared/Notification.vue'
import KmSpinner from '@/components/shared/Spinner.vue'

import trackService from '@/services/track'

export default {
  name: 'app',
  data () {
    return {
      loading: false,
      searchQuery: '',
      tracks: [],
      selectedTrack: '',
      showNotification: false
    }
  },
  components: {
    KmSpinner, KmTrack, KmNotification
  },
  computed: {
    searchMessage () {
      let msg = ''
      if (this.tracks.length > 0) {
        msg = `Encontrados: ${this.tracks.length}`
      } else {
        msg = 'No se encontraron resultados'
      }
      return msg
    },
    typeNotification () {
      return this.tracks.length > 0 ? 'is-success' : 'is-danger'
    }
  },
  methods: {
    search () {
      if (!this.searchQuery) { return }
      this.loading = true
      trackService.search(this.searchQuery)
        .then(res => {
          this.showNotification = true
          this.tracks = res.tracks.items
          this.loading = false
        })
    },
    cancel () {
      this.searchQuery = ''
    },
    playMusic (id) {
      this.selectedTrack = id
    }
  },
  watch: {
    showNotification () {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false
        }, 3000)
      }
    }
  }
}
</script>

<style lang="scss">
  .is-active {
    border: 3px solid #23d160;
  }
</style>
