<template>
  <div id="app">
    <NavBar
      :submitCall="submit"
      :canSubmit="this.tasks.length === 0 ? false : true"
    />
    <router-view
      :update="updateTask"
      class="task_grid"
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

.task_grid {
  padding-top: 120px;
}
</style>
