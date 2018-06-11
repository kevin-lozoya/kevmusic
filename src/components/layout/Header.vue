<template lang="pug">
  section.hero.is-success
    .hero-head
      header.nav
        .container
          .nav-left
            .nav-item
              strong KevMusic
          .nav-right.nav-menu
    
    .hero-body
      .container.has-text-centered
        h1.title KevMusic
        h2.subtitle Buscador de canciones
        km-player
</template>

<script>
import KmPlayer from '@/components/Player.vue'
export default {
  components: {
    KmPlayer
  }
}
</script>

