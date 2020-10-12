<template>
  <div>
    <h3>
      Semaine
    </h3>
    <ScoreBoard/>
    <div class="table">
      <TableResult :list="results"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import TableResult from './TableResult.vue';
import ScoreBoard from './ScoreBoard.vue';

export default {
  name: 'WeekBoard',
  components: {
    TableResult,
    ScoreBoard,
  },
  data() {
    return {
      table: [],
      tasks: [],
      profils: [],
      results: [],
    };
  },
  mounted() {
    axios.get('http://192.168.1.48:8000/tasks')
      .then((response) => {
        this.tasks = response.data;
      });

    axios.get('http://192.168.1.48:8000/profils')
      .then((response) => {
        this.profils = response.data;
      });

    axios.get('http://192.168.1.48:8000/week')
      .then((response) => {
        console.log(response.data[1]);
        const { profils } = this;
        const { tasks } = this;
        const res = [];

        tasks.map((element) => {
          const obj = { // Build empty results
            name: element,
          };
          // eslint-disable-next-line no-restricted-syntax
          for (const profil of profils) {
            obj[profil] = 0;
          }
          res.push(obj);
          return true;
        });

        response.data[0].map((element, index) => {
          if (element.score.length === 0) {
            res[index].total = 0;
          } else {
            let total = 0;
            element.score.map((e) => {
              res[index][e.profil] = e.nb;
              total += e.nb;
              return true;
            });
            res[index].total = total;
          }
          return true;
        });
        this.results = res;
        return true;
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
  margin-bottom: 100px;
}
</style>
