<template>
  <v-container>
    <div class="task">
      <v-card
        v-ripple
        :elevation="8"
        height="100"
        width="100"
        id="rounded-card"
      >
        <div v-on:click="$emit('display-drawer')">
          <svgicon
            class="iconbutton"
            icon="fight"
            width="75"
            height="75"
            color="green"
          >
          </svgicon>
        </div>
      </v-card>
      <p>Verre</p>
    </div>
  </v-container>
</template>

<script>
import '../compiled-icons/fight';

export default {
  name: 'TaskCell',
};

</script>

<style>
.task {
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#rounded-card {
  border-radius: 50%;
  border: 1px solid black;
}

.iconbutton {
  margin-top: 9px;
}
</style>
