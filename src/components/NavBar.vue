<template>
  <div>
    <v-app-bar prominent class="navbar">
      <div class="title">
      <v-toolbar-title></v-toolbar-title>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    msg: String,
  },
};
</script>

<style scoped>
  .navbar {
    background: rgb(140,71,76);
background: linear-gradient(80deg, rgba(140,71,76,0.9892157546612395) 0%, rgba(185,109,119,1) 100%);

 }
  .title {
    color: white;
    margin-top: 30px;
  padding: 10px;
  }
</style>
