<template>
  <div class="grid">
      <TaskCell
        v-for="item in items"
        :key="item.id"
        :path="item.filename"
        :title="item.title"
        :name="item.name"
        :add="addTasks"
        :remove="removeTasks"
      />
  </div>
</template>

<script>
import TaskCell from './TaskCell.vue';
import items from '../../tasks.json';

export default {
  name: 'TaskGrid',
  components: {
    TaskCell,
  },
  props: {
    update: {
      type: Function,
    },
  },
  data() {
    return {
      items: items.tasks,
      tasks: [],
    };
  },
  methods: {
    addTasks(element) {
      this.tasks.push(element);
      this.update(this.tasks);
      this.$nextTick(() => {
        this.update(this.tasks);
      });
    },
    removeTasks(element) {
      this.tasks = this.tasks.filter((e) => e !== element);
      this.$nextTick(() => {
        this.update(this.tasks);
      });
    },
  },
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 1em;
  padding-left: 80px;
  margin-top: 100px;
}
</style>
