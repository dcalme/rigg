<template>
  <div>
  <h3>
    Semaine
  </h3>
  <div class="table">
    <TableResult :list="table"/>
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
  data() {
    return {
      table: [],
    };
  },
  mounted() {
    axios.get('http://192.168.1.48:8000/week')
      .then((response) => {
        // console.log(response.data.Cuisine[0]);
        // console.log(response.data.Cuisine[1]);
        this.table = response.data;
      });
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
