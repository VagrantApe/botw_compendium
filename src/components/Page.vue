<template>
  <div class="page">
    <CardList :items="items || []" />
    <Loading v-if="!loading" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CardList from './CardList.vue'
import Loading from './Loading.vue'

export default({
  name: 'Page',
  components: {
    CardList,
    Loading
  },
  props: {
    items: Array
  },
    computed: {
    ...mapGetters({
      loading: `getLoaded`
    }),
  }
})
</script>

<style scoped>
.page {
  display: flex;
  background-image: url("../assets/hyrule_textures.jpeg");
  background-repeat: repeat-y;
  margin-top: 60px;
  height: 100%;
  padding-bottom: 80px;
  justify-content: center;
}
</style>