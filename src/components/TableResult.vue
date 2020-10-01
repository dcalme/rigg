<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    item-key="name"
    hide-default-footer
    :items-per-page="30"
  >
  </v-data-table>
</template>

<script>
// import tasks from '../../data/tasks.json';
// import profiles from '../../data/profiles.json';

export default {
  name: 'TableResult',
  props: {
    list: Object,
  },
  data: () => ({
    desserts: [
      {
        name: 'Frozen Yogurt',
        countDarius: 159,
        countJustine: 6.0,
        total: 24,
        daysSince: 4.0,
      },
      {
        name: 'Ice cream sandwich',
        countDarius: 159,
        countJustine: 6.0,
        total: 24,
        daysSince: 4.0,
      },
      {
        name: 'Eclair',
        countDarius: 159,
        countJustine: 6.0,
        total: 24,
        daysSince: 4.0,
      },
      {
        name: 'Cupcake',
        countDarius: 159,
        countJustine: 6.0,
        total: 24,
        daysSince: 4.0,
      },
      {
        name: 'Gingerbread',
        countDarius: 159,
        countJustine: 6.0,
        total: 24,
        daysSince: 4.0,
      },
      {
        name: 'Jelly bean',
        countDarius: 159,
        countJustine: 6.0,
        total: 24,
        daysSince: 4.0,
      },
      {
        name: 'Lollipop',
        countDarius: 159,
        countJustine: 6.0,
        total: 24,
        daysSince: 4.0,
      },
      {
        name: 'Honeycomb',
        countDarius: 159,
        countJustine: 6.0,
        total: 24,
        daysSince: 4.0,
      },
      {
        name: 'Donut',
        countDarius: 159,
        countJustine: 6.0,
        total: 24,
        daysSince: 4.0,
      },
      {
        name: 'KitKat',
        countDarius: 159,
        countJustine: 6.0,
        total: 24,
        daysSince: 4.0,
      },
      {
        name: 'Hello',
        countDarius: 159,
        countJustine: 6.0,
        total: 24,
        daysSince: 4.0,
      },
    ],
    headers: [
      {
        text: 'Taches ménagères',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      { text: 'Darius', value: 'countDarius' },
      { text: 'Justine', value: 'countJustine' },
      { text: 'Total', value: 'total' },
      { text: 'Dernière Fois', value: 'daysSince' },
    ],
  }),
};
</script>
