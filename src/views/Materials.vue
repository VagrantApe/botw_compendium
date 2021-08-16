<template>
  <Page :items="materials" />
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
      materials: `getMaterials`
    }),
  }
})
</script>