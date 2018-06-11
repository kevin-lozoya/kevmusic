<template lang="pug">
  section.hero.is-success
    .hero-head
      header.navbar
        .container
          .navbar-start
            .navbar-item
              strong KevMusic
          .navbar-end.nav-menu
            router-link.navbar-item(to="/") Buscar
            router-link.navbar-item(to="about") Nosotros
    
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

