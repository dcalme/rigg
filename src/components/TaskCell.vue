<template>
  <v-container>
    <div class="task">
      <v-hover>
        <template v-slot="{ hover }">
          <v-card
            :flat="hover ? false : true"
            :elevation="hover ? 24 : 0"
            height="100"
            width="100"
            id="rounded-card"
            :style="isClicked ? { 'background-color': '#969696' } : null"
          >
            <div v-on:click="$emit('display-drawer'), toggleIsClicked()">
              <img
                v-bind:src="require(`../assets/${path}`)"
                class="iconbutton"
              />
            </div>
          </v-card>
        </template>
      </v-hover>
      <p
        class="title"
        :style="isClicked ? { 'fontWeight': '600' } : { 'fontWeight': '200' }"
      >
        {{title}}
      </p>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'TaskCell',
  props: {
    name: String,
    path: String,
    title: String,
  },
  data() {
    return {
      isClicked: false,
    };
  },
  methods: {
    toggleIsClicked() {
      this.isClicked = !this.isClicked;
      console.log(this.isClicked);
    },
  },
};
</script>

<style scoped>
.task {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid black; */
}

#rounded-card {
  border-radius: 50%;
  border: 1px solid black;
}

.iconbutton {
  margin-top: 12px;
  /* color: inherit; */
}

#rounded-card:hover {
  background-color: #EEEEEE;
}

.title {
  margin-top: 10px;
  font-variant-caps: small-caps;
  }

</style>
