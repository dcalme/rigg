<template>
  <div class="date_container">
    <h3 class="day">
      {{ day }}
    </h3>
    <p class="date_time">
      {{ date }}
    </p>
  </div>
</template>

<script>
function getTime() { // Return date in dd/mm/yyyy format
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  today = `${dd}/${mm}/${yyyy}`;
  return today;
}

function dayOfWeek() { // Return day of week in letters
  const day = new Date().toLocaleString('fr-FR', { weekday: 'long' });
  const capitalizedDay = day.charAt(0).toUpperCase() + day.slice(1);
  return capitalizedDay;
}

export default {
  name: 'DateDisplay',
  data() {
    return {
      date: getTime(),
      day: dayOfWeek(),
    };
  },
};
</script>

<style scoped>
.date_container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>
