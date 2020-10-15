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
    headers: Array,
  },
};
</script>
