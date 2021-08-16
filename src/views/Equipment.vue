<template>
  <Page :items="equipment" />
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
      equipment: `getEquipment`
    }),
  }
})
</script>