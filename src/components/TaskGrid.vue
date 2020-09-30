<template>
<div>
  <div class="date">
    <DateDisplay/>
  </div>
  <div class="grid">
    <TaskCell
      v-for="item in items"
      :key="item.id"
      :path="item.filename"
      :title="item.title"
      :name="item.name"
      :svg="item.svg"
      :add="addTasks"
      :remove="removeTasks"
    />
  </div>
  <div class="text-center">
    <template v-if="overlay">
      <SubmitModal
        :tasks="tasks"
        :discard="cancel"
      />
    </template>
  </div>
</div>
</template>

<script>
import axios from 'axios';
import TaskCell from './TaskCell.vue';
import DateDisplay from './DateDisplay.vue';
import SubmitModal from './SubmitModal.vue';
import items from '../../data/tasks.json';

export default {
  name: 'TaskGrid',
  components: {
    TaskCell,
    DateDisplay,
    SubmitModal,
  },
  props: {
    update: {
      type: Function,
    },
    cancel: {
      type: Function,
    },
    overlay: Boolean,
  },
  data() {
    return {
      items: items.tasks,
      tasks: [],
      info: [],
    };
  },
  mounted() {
    console.log('request');
    axios.get('http://192.168.1.48:3000/')
    // eslint-disable-next-line no-return-assign
      .then((response) => (console.log(response)));
  },
  methods: {
    addTasks(element) {
      this.tasks.push(element);
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
.date {
  margin-top: 70px;
}
</style>
