<template>
  <Page :items="monsters" />
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
      monsters: `getMonsters`
    }),
  }
})
</script>