<template>
  <div class="grid">
    <TaskCell v-on:display-drawer="collect = true"/>
    <DrawerTask v-if="collect"/>
  </div>
</template>

<script>
import TaskCell from './TaskCell.vue';
import DrawerTask from './DrawerTask.vue';

export default {
  name: 'TaskGrid',
  components: {
    TaskCell,
    DrawerTask,
  },
  data() {
    return {
      collect: false,
    };
  },
};
</script>

<style scoped>
.grid {
  padding-left: 40px;
  margin-top: 100px;
}
</style>
