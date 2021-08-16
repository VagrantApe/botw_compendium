<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> 
      <router-link :class="{ disabled: !loaded }" to="/creatures">Creatures</router-link> 
      <router-link :class="{ disabled: !loaded }" to="/equipment">Equipment</router-link> 
      <router-link :class="{ disabled: !loaded }" to="/materials">Materials</router-link> 
      <router-link :class="{ disabled: !loaded }" to="/monsters">Monsters</router-link> 
      <router-link :class="{ disabled: !loaded }" to="/treasure">Treasure</router-link>
    </div>
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer'
import { mapGetters } from 'vuex'
import store from './store/index'
import '@/assets/global.css'

export default {
  store,
  components: {
    Footer
  },
  beforeCreate() {
    store.dispatch('getAll')
  },
  computed: {
    ...mapGetters({
      loaded: 'getLoaded'
    })
  }
}
</script>


<style>
@font-face {
  font-family: "Hyrule";
  src: local("Hyrule"),
  url(./fonts/HyliaSerifBeta-Regular.otf) format("opentype");
}
body {
  margin: 0;
  padding: 0;
  background-color: var(--tunicBlue);
}
#app {
  font-family: Hyrule, Ruluko, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
#nav {
  background-color: var(--ochre);
  border-bottom: solid 3px var(--tunicBlue);
  padding-top: 20px;
  position: fixed;
  top: 0px;
  width: 100%;
  height: 40px;
}
#nav a {
  font-weight: bold;
  margin: 0 10px;
  color: var(--blueish);
  text-decoration: none;
}
#nav a.router-link-exact-active {
  color:var(--greenish);
}
.disabled {
  opacity: 0.5;
  pointer-events: none;
}
</style>
