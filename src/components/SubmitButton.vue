<template>
  <div class="button">
    <div>
      <v-btn raised large :disabled="!isActive">Valider</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubmitButton',
  props: {
    isActive: Boolean,
  },
  data() {
    return {
    };
  },
  methods: {
    toggleIsActive() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style scoped>
.button {
  padding: 10px;
}
</style>
