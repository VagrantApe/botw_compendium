<template>
  <Page :items="creatures" />
</template>

<script>
import { mapGetters } from 'vuex'
import Page from '../components/Page.vue'

export default({
  components: {
    Page
  },
  computed: {
    ...mapGetters({
      creatures: 'getCreatures'
    }),
  }
})
</script>