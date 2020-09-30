<template>
  <h3>
    Mois
  </h3>
</template>

<script>
import axios from 'axios';

export default {
  name: 'MonthBoard',
  mounted() {
    console.log('MonthBoard mounted call');
    axios.get('http://localhost:3000/month')
      .then((response) => (console.log(response)));
  },
};
</script>

<style scoped>
h3 {
  margin-top: 100px;
}
</style>
