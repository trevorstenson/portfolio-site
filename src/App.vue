<template>
  <div id="app">
    <router-view/> 
  </div>
</template>

<script>
import Home from "./views/Home.vue";

export default {
  name: "app",
  components: {
    Home
  }
};
</script>

<style>
#app {
  font-family: 'Karla', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

