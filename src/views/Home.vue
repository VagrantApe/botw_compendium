<template>
  <div class="home">
    <img class="logo" src="../assets/botw_logo.png" alt="breathe of the wild logo" >
    <p>
      Breathe Of The Wild Compenduim
    </p>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>
<style scoped>
.home {
  background: url("../assets/botw_scene.jpg") center center no-repeat;
  box-shadow: 0 0 40px 40px var(--tunicBlue) inset;
  border-radius: 50%;
  margin: auto;
  width: 60%;
  height: 600px;
  margin-top: 100px;
}
.logo{
  margin-top: 20vh;
  width: 200px;
}
</style>

