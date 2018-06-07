<template>
  <div id="app">
    <img src="./assets/logo.png" alt="">
    <h1>KevMusic</h1>
    <select v-model="selectedCountry">
      <option v-for="country in countries" :value="country.value" :key="country.value">{{ country.name }}</option>
    </select>
    <spinner v-show="loading"></spinner>
    <ul v-show="!loading">
      <artist v-for="artist in artists" :artist="artist" :key="artist.mbid"></artist>
    </ul>
  </div>
</template>

<script>
import getArtists from './api'
import Artist from './components/Artist.vue'
import Spinner from './components/Spinner.vue'

export default {
  name: 'app',
  data () {
    return {
      artists: [],
      countries: [
        {name: 'Argentina', value: 'argentina'},
        {name: 'Colombia', value: 'colombia'},
        {name: 'España', value: 'spain'},
      ],
      selectedCountry: 'spain',
      loading: true
    }
  },
  components: {
    Artist,
    Spinner
  },
  methods: {
    refreshArtists () {
      this.loading = true
      const self = this
      getArtists(this.selectedCountry)
        .then(function (artists) {
          self.loading = false
          self.artists = artists
        })    
    }
  },
  mounted: function () {
    this.refreshArtists()
  },
  watch: {
    selectedCountry: function () {
      this.refreshArtists()
    }
  }
}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px

h1, h2
  font-weight normal

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
