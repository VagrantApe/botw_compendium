<template>
  <div class="card">
    <img :src="image" :alt="name" />
    <div class="info">
      <h3 class="name">{{name}}</h3>
      <div class="description">{{description}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: [
    'name',
    'description',
    'image'
  ]
}
</script>

<style scoped>
.card {
  background-color: var(--peachy);
  display: flex;
  border: solid 3px var(--darkishGreen);
  border-radius: 10px;
  margin: 10px;
}

.info {
  flex-direction: column;
}

img {
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}

@media only screen and (max-width: 700px) {
  .card {
    flex-direction: column;
    padding-bottom: 20px;
  }
  img {
    border-top-right-radius: 8px;
    border-bottom-left-radius: 0px;
  }
}

.name {
  font-size: 1.5em;
  color: var(--blueish)
}

.description {
  font-size: 1em;
  overflow-y: auto;
  padding: 0 10px;
  color: var(--yeller)
}
</style>
