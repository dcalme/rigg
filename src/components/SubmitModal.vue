<template>
  <div>
    <v-overlay
      opacity="0.99"
      color="#212121"
      :value="active"
    >
      <v-card
        raised
        color="#fff"
        class="overlay"
      >
        <div>
          <v-card-title class="modalButton">
            Sélection
          </v-card-title>
        </div>
        <div class="avatarContainer">
          <div class="modalButton">
            <span>
              Darius
            </span>
          </div>
          <div class="modalButton">
            <span>
              Justine
            </span>
          </div>
        </div>
        <div class="list">
          <v-list
            dense
            ripple
            light
          >
            <v-list-item
              v-for="(item, i) in this.data"
              :key="i"
            >
              <v-list-item-content>
                <v-list-item-title class="modalButton">{{item}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </div>
        <v-card-actions>
          <v-btn
            text
            color="#212121"
          >
            Ok
          </v-btn>
          <v-btn
            @click="active = false"
            text
            color="#212121"
          >
            Annuler
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-overlay>
  </div>
</template>

<script>
export default {
  name: 'SubmitModal',
  props: {
    overlay: Boolean,
    data: Array,
  },
  computed: {
    display() {
      console.log(this.data);
      return 0;
    },
  },
  data() {
    return {
      active: true,
    };
  },
};
</script>

<style scoped>
.overlay {
  padding: 20px;
}
.modalButton {
  color: #000;
}
.List {
  background-color: #ffffff;
}
.avatarContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
