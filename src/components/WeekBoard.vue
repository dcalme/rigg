<template>
  <div>
  <h3>
    Semaine
  </h3>
  <div class="table">
    <TableResult/>
  </div>
  </div>
</template>

<script>
import TableResult from './TableResult.vue';

export default {
  name: 'WeekBoard',
  components: {
    TableResult,
  },
};
</script>

<style scoped>
h3 {
  margin-top: 100px;
}

.table {
  margin-top: 30px;
  margin-left: 150px;
  margin-right: 150px;
}
</style>
