<template>
  <div>
    <v-overlay
      opacity="0.99"
      color="#212121"
    >
      <v-card
        raised
        color="#fff"
        class="overlay"
      >
        <div>
          <v-card-title class="title">
            Séléction
          </v-card-title>
        </div>
        <div class="list">
          <v-list
            dense
            ripple
            light
          >
            <v-list-item
              v-for="(item, i) in this.tasks"
              :key="i"
            >
              <v-list-item-content>
                <v-list-item-title class="listItem">
                  {{ item }}
                </v-list-item-title>
                <v-divider></v-divider>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </div>
        <div class="selectContainer">
          <NameSwitch :handler="handlingSelect"/>
        </div>
        <v-card-actions class="modalButtons">
          <div class="buttons">
            <v-btn
              color="#1867C0"
              @click="finalValidation"
              :outlined="!disp"
            >
              Ok
            </v-btn>
          </div>
          <div class="buttons">
            <v-btn
              @click="discard"
              color="#1867C0"
              raised
            >
              Annuler
            </v-btn>
          </div>
        </v-card-actions>
      </v-card>
    </v-overlay>
  </div>
</template>

<script>
import NameSwitch from './NameSwitch.vue';

export default {
  name: 'SubmitModal',
  components: {
    NameSwitch,
  },
  props: {
    overlay: Boolean,
    tasks: Array,
    discard: {
      type: Function,
    },
  },
  methods: {
    handlingSelect(index) {
      this.disp = true;
      if (!this.status.includes(1)) { // select is empty
        this.status[index] = 1;
      } else if (this.status.includes(1) && this.status.findIndex(this.checkStatus) !== index) {
        // select is re-assign
        this.status = [0, 0];
        this.status[index] = 1;
      }
    },
    checkStatus(element) {
      return element === 1;
    },
    finalValidation() {
      if (this.disp) {
        console.log('into finalValidation');
      } else {
        console.log('choose one profile');
      }
    },
    isSelected() {
      return this.status.includes(0) === true;
    },
  },
  data() {
    return {
      status: [0, 0],
      disp: false,
    };
  },
};
</script>

<style scoped>
.listItem {
  color: #000;
  display: flex;
  margin-left: 25px;
  margin-right: 35px;
}

.list {
  /* border: 1px solid black; */
  margin-right: 80px;
}

.overlay {
  padding: 20px;
}

.selectContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.modalButtons {
  margin-top: 30px;
}

.buttons {
  margin-left: 10px;
  margin-right: 10px;
}

.title {
  color: #000;
}
</style>
