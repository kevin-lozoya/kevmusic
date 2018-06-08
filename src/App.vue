<template lang="pug">
  #app
    section.section
      nav.nav.has-shadow
        .container
          input.input(
            type="text", 
            placeholder="Buscar canciones", 
            v-model="searchQuery")
          a.button.is-info(@click="search") Buscar
          a.button.is-danger &times;
      
      .container
        p {{ searchMessage }}
      
      .container
        .columns
          .column(v-for="t in tracks")
            | {{ t.name }} -  {{ t.artists[0].name}}
</template>

<script>
import Spinner from './components/Spinner.vue'
import trackService from './services/track'

export default {
  name: 'app',
  data () {
    return {
      loading: true,
      searchQuery: '',
      tracks: []
    }
  },
  components: {
    Spinner
  },
  computed: {
    searchMessage () {
      return `Encontrados: ${this.tracks.length}`
    }
  },
  created () {
  },
  methods: {
    search () {
      if (!this.searchQuery) { return }
      trackService.search(this.searchQuery)
        .then(res => {
          this.tracks = res.tracks.items
        })
    }
  },
  mounted () {
  },
  watch: {
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';
</style>
