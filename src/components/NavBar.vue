<template>
  <div class="nav_container">
    <v-app-bar
      prominent
      fixed
      class="navbar"
    >
      <div class="headers">
        <span class="header">
          Semaine
        </span>
        <span class="header">
          Mois
        </span>
      </div>
      <v-spacer></v-spacer>
      <SubmitButton
        class="submit_button"
        :submitCall="submitCall"
        :canSubmit="canSubmit"
      />
    </v-app-bar>
  </div>
</template>

<script>
import SubmitButton from './SubmitButton.vue';

export default {
  name: 'NavBar',
  props: {
    submitCall: Function,
    canSubmit: Boolean,
  },
  components: {
    SubmitButton,
  },
};
</script>

<style scoped>
.navbar {
  background: rgb(140,71,76);
  background: linear-gradient(80deg,rgba(140,71,76,0.9892157546612395) 0%,rgba(185,109,119,1) 100%);
}

.submit_button {
  margin-top: 20px;
  margin-right: 100px;
}

.headers {
  margin-top: 50px;
  margin-left: 100px;
}

.header {
  color: rgba(150, 150, 150, 0.8);
  margin-right: 10px;
  cursor: pointer;
}
.header:hover {
  color: #D3D3D3;
}
</style>
