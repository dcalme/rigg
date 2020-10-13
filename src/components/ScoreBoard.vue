<template>
  <div>

  <div>
  <v-list>
    <v-list-item
    v-for="(item, i) in this.profils"
    :key="i"
    >
    <v-list-item-content>
    {{ item.charAt(0).toUpperCase() + item.slice(1) }} :
    {{ points[i]  + " pts"}}
    </v-list-item-content>
    </v-list-item>
    </v-list>
  </div>
  </div>
</template>

<script>
export default {
  name: 'ScoreBoard',
  props: {
    points: Array,
    profils: Array,
  },
};
</script>

<style scoped>

</style>
