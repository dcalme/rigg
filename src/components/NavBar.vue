<template>
  <div class="nav_container">
    <v-app-bar
      prominent
      fixed
      class="navbar"
    >
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
  display: flex;
  flex-direction: row-reverse;
}

.submit_button {
  margin-top: 20px;
  margin-right: 100px;
}
</style>
