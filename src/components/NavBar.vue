<template>
  <div class="hello">
    <v-app-bar flat prominent dark>
      <v-toolbar-title>Title</v-toolbar-title>
      <v-app-bar-nav-icon>
        <v-btn>
          <v-icon light>home</v-icon>
        </v-btn>
      </v-app-bar-nav-icon>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
