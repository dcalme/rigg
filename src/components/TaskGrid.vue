<template>
  <div class="grid">
      <TaskCell
        v-for="item in items"
        :key="item.id"
        v-on:display-drawer="collect = true"
        :path="item.filename"
        :title="item.title"
        :name="item.name"
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
  data() {
    return {
      items: items.tasks,
    };
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
