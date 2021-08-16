<template>
  <Page :items="treasure" />
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
      treasure: `getTreasure`
    }),
  }
})
</script>