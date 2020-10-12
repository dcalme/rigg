<template>
  <v-data-table
    :headers="headers"
    :items="list"
    item-key="name"
    hide-default-footer
    :items-per-page="30"
  >
  </v-data-table>
</template>

<script>
export default {
  name: 'TableResult',
  props: {
    list: Array,
  },
  data: () => ({
    headers: [
      {
        text: 'Taches ménagères',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      { text: 'Darius', value: 'darius' },
      { text: 'Justine', value: 'justine' },
      { text: 'Total', value: 'total' },
      // { text: 'Dernière Fois', value: 'daysSince' },
    ],
  }),
};
</script>
