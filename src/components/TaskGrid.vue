<template>
  <div class="grid">
    <!-- <v-btn large rounded>
      <img src="../assets/vacuumColor.png"/>
    </v-btn>
    <v-btn large rounded>
      <img src="../assets/trash.png"/>
    </v-btn> -->
    <!-- <v-card rounded ripple hover class="card">
    <svgicon icon="fight" width="50" height="50" color="green"></svgicon>
    <v-card-title> Glass </v-card-title>
    </v-card>
    <v-card hover rounded class="card">
    <svgicon icon="fight" width="50" height="50" color="green"></svgicon>
    </v-card>
    <v-card hover rounded class="rounded-pill">
    <svgicon icon="fight" width="50" height="50" color="green"></svgicon>
    </v-card> -->
    <v-container>
      <div class="task">
        <v-card
          @mouseover="turn = true"
          @mouseleave="turn = false"
          @click="collect = true"
          :elevation="15"
          height="100"
          width="100"
          id="rounded-card"
          >
          <svgicon class="iconbutton" icon="fight" width="75" height="75" color="green"></svgicon>
        </v-card>
        <transition name="fade">
          <p v-if="turn">Hello</p>
        </transition>
      </div>
    </v-container>
    <v-card
      v-if="collect"
      elevation="7"
      width="156"
    >
      <v-navigation-drawer
        floating
        permanent
      >
        <v-list
          dense
          rounded
        >
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <SubmitButton/>
      </v-navigation-drawer>
    </v-card>
  </div>
</template>

<script>
import '../compiled-icons/fight';
// eslint-disable-next-line no-unused-vars
import SubmitButton from './SubmitButton.vue';

export default {
  name: 'TaskGrid',
  components: {
    SubmitButton,
  },
  data() {
    return {
      turn: false,
      collect: false,
      items: [
        { title: 'Home', icon: 'dashboard' },
        { title: 'About', icon: 'question_answer' },
      ],
    };
  },
};
</script>

<style scoped>
.task {
  border: 1px solid black;
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.grid {
  /* width: 70%; */
  padding-left: 40px;
}
.iconbutton {
  /* border: 1px solid black; */
  margin-top: 9px;
}

/* #rounded-card:hover {
  background-color: grey;
} */

#rounded-card {
  border-radius: 50%;
  /* min-height: 500px; */
  /* min-width: 500px; */
  /* padding: 75px; */
}

#rounded_card:hover .overlay {
  opacity: 1;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .6s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
