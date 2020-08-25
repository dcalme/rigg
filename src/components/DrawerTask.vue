<template>
  <v-card
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
</template>

<script>
import SubmitButton from './SubmitButton.vue';

export default {
  name: 'DrawerTask',
  components: {
    SubmitButton,
  },
  data() {
    return {
      items: [
        { title: 'Home', icon: 'dashboard' },
        { title: 'About', icon: 'question_answer' },
      ],
    };
  },
};
</script>

<style scoped>

</style>
