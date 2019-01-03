<template>
  <div id="app">
    <Game msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Game from './components/Game.vue'

export default {
  name: 'app',
  components: {
    Game
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ccc;
  margin-top: 60px;
}

body {
  height: 100%;
  width: auto;
  margin: 0;
  background-attachment: fixed;
  background: rgb(23,0,36);
  background: linear-gradient(47deg, rgba(23,0,36,1) 0%, rgba(39,8,48,1) 35%, rgba(255,0,0,1) 100%) fixed; 
}
</style>
