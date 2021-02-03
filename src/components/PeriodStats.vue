<template>
  <div>
    <div>
      <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'PeriodStats',
  mounted() {
    axios.get('http://localhost:8000/monthEvolution')
      .then((response) => {
        this.period = response.data[0].period;
        this.score = response.data.map((element) => element);
      });
  },
  computed: {
    series() {
      return this.score;
    },
    chartOptions() {
      return {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: 'straight',
        },
        title: {
          text: 'Points par Mois',
          align: 'left',
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: this.period,
        },
      };
    },
  },
  data() {
    return {
      period: [],
      score: [],
    };
  },
};
</script>
