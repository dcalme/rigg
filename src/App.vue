<template>
  <div id="app">
    <NavBar
      :submitCall="submit"
      :canSubmit="this.tasks.length === 0 ? false : true"
    />
    <router-view
      :update="updateTask"
      class="task_grid"
      :overlay="this.overlay"
      :cancel="cancel"
    />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
  },
  data() {
    return {
      tasks: [],
      overlay: false,
    };
  },
  methods: {
    updateTask(element) {
      this.tasks = element;
    },
    submit() {
      this.overlay = true;
    },
    cancel() {
      this.overlay = false;
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

.task_grid {
  padding-top: 120px;
}
</style>
