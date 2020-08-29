<template>
  <div id="app">
    <NavBar/>
    <TaskGrid/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import TaskGrid from './components/TaskGrid.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    TaskGrid,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
