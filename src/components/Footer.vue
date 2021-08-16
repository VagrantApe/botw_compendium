<template>
  <div class="footer">
    <div class="copy">&copy; 2021</div>
  </div>
</template>

<script>

export default {
  name: 'Footer',

}
</script>

<style scoped>
.footer {
  background-color: var(--ochre);
  color: var(--greenish);
  border-top: solid 3px var(--tunicBlue);
  height: 40px;
  position: fixed;
  bottom: 0px;
  width: 100%;
}
.copy {
  padding-top: 10px;
}
</style>