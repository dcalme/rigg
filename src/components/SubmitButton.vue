<template>
  <div class="button">
    <div>
      <v-btn
        raised
        large
        :disabled="!canSubmit"
        v-on:click="submitCall"
      >
        Valider
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubmitButton',
  props: {
    canSubmit: Boolean,
    submitCall: Function,
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped>
.button {
  padding: 10px;
}
</style>
