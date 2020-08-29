<template>
  <div class="parent">
      <TaskCell v-for="item in items" :key="item.id"
        v-on:display-drawer="collect = true"
        :path="item.filename"
        :title="item.title"
        :name="item.name"
      />
      <!-- <DrawerTask v-if="collect"/> -->
  </div>
</template>

<script>
import TaskCell from './TaskCell.vue';
// import DrawerTask from './DrawerTask.vue';
import items from '../../tasks.json';

export default {
  name: 'TaskGrid',
  components: {
    TaskCell,
    // DrawerTask,
  },
  data() {
    return {
      items: items.tasks,
    };
  },
  computed: {
    itemz() {
      let arr = [];
      const finalArr = [];
      for (let i = 0; i < this.items.length; i += 1) {
        if (i % 5 === 0 && i !== 0) {
          // Cut to 5 elements
          console.log('5 items in array');
          finalArr.push(arr);
          arr = [];
        } else {
          arr.push(this.items[i]);
        }
        if (i === this.items.length) {
          finalArr.push(arr);
        }
      }
      console.log('hello', finalArr);
      return finalArr;
    },
  },
};
</script>

<style scoped>
.grid {
  display: flex;
  flex-direction: row;
}

.parent {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 1em;
  padding-left: 80px;
  margin-top: 100px;
}
</style>
