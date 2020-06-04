<template>
  <div id="app">
    <Ferry />
  </div>
</template>

<script>
import Ferry from './components/Ferry.vue'

export default {
  name: 'App',
  components: {
    Ferry
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
