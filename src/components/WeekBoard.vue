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
import axios from 'axios';
import TableResult from './TableResult.vue';

export default {
  name: 'WeekBoard',
  components: {
    TableResult,
  },
  mounted() {
    console.log('WeekBoard mounted call');
    axios.get('http://localhost:3000/week')
      .then((response) => (console.log(response)));
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
