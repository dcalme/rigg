<template>
   <div id="chart">
        <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>
      </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'PeriodStats',
  mounted() {
    axios.get('http://localhost:8000/monthEvolution')
      .then((response) => {
        this.period = response.data.map((element) => element.date);
        this.score = response.data.map((element) => parseInt(element.score, 10));
        console.log(this.period);
        console.log(this.score);
      });
  },
  computed: {
    series() {
      return [
        {
          name: 'Desktops',
          data: this.score,
        },
      ];
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
          enabled: false,
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
