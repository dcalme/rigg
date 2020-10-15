<template>
  <div>
    <h3>
      Depuis le début
    </h3>
    <div class="scoreContainer">
      <ScoreBoard :points="points" :profils="profils"/>
    </div>
    <div class="table">
      <TableResult :list="results" :headers="headers"/>
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
      tasks: [],
      profils: [],
      results: [],
      points: [],
      headers: [],
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
        const heads = [{
          text: 'Taches ménagères', align: 'start', sortable: false, value: 'name',
        }];
        response.data.map((element) => {
          const obj = {
            text: element.charAt(0).toUpperCase() + element.slice(1),
            value: element,
          };
          heads.push(obj);
          return true;
        });
        heads.push({ text: 'Total', value: 'total' });
        this.headers = heads;
      });

    axios.get('http://192.168.1.48:8000/start')
      .then((response) => {
        // eslint-disable-next-line prefer-destructuring
        this.points = response.data[1];
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
.scoreContainer {
  text-align: left;
  margin-left: 150px;
}
</style>
