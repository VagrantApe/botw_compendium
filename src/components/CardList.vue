<template>
  <div class="cards" v-if="items.length > 0">
    <div v-for="item in items" :key="item.id">
      <Card 
        :description="item.description" 
        :image="item.image" 
        :name="item.name" 
      />
    </div>
  </div>
</template>

<script>
import Card from './Card.vue'

export default({
  name: 'CardList',
  props: {
    items: Array
  },
  components: {
    Card
  },
})
</script>

<style scoped>
.cards {
  padding: 10px;
  width: clamp(470px, 75%, 850px);
}
</style>