<template>
  <div id="app">
    <NavBar :submitCall="submit" :canSubmit="this.tasks.length === 0 ? false : true"/>
    <TaskGrid :update="updateTask"/>

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
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    updateTask(element) {
      this.tasks = element;
    },
    submit() {
      alert(this.tasks);
    },
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
