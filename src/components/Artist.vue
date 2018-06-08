<template>
  <li>
    <h2>
      <a :href="artist.url" target="_blank">
        {{ artist.name }}
      </a> <br>
      <img :src="artist.image[2]['#text']" :alt="'image' + artist.name">
    </h2>
  </li>
</template>

<script>
  export default {
    name: 'artist',
    props: ['artist']
}
</script>

<style lang="scss" scoped>

</style>
