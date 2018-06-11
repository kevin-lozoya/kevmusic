<template lang="pug">
  .container
    .columns
      .column.is-5.is-offset-4
        div(:class="classType")
          slot(name="body") Algo fue mal
</template>

<script>
export default {
  name: 'notification',
  props: {
    typeNotification: { type: String, required: true }
  },
  computed: {
    classType () {
      return `notification ${this.typeNotification}`
    }
  }
}
</script>


<style lang="scss" scoped>
  .notification {
    margin: 10px;
  }
</style>

