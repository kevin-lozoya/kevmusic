<template lang="pug">
  #app
    km-header

    router-view

    km-footer
</template>

<script>
import KmFooter from '@/components/layout/Footer.vue'
import KmHeader from '@/components/layout/Header.vue'

export default {
  name: 'app',
  components: {
    KmFooter, KmHeader
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';
</style>
