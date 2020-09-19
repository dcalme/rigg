<template>
  <div class="container">
    <div
      v-for="item in items"
      :key="item.id"
      class="profile"
    >
      <div
        class="medaillon"
        @click="selectProfile(item.id); handler(item.id)"
        :style="selected === item.id ?
        {'background-color': 'rgba(163, 91, 98, 0.8)'} : {'background-color' : 'white'}"
      >
        <ProfileIcon :img="item.img"/>
      </div>
      <div
        class="name"
        :style="selected === item.id ? {'font-weight': '600'} : {'font-weight' : '200'}"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
import ProfileIcon from './ProfileIcon.vue';
import items from '../../profiles.json';

export default {
  name: 'NameSwitch',
  props: {
    // handling logic operation
    handler: {
      type: Function,
    },
  },
  components: {
    ProfileIcon,
  },
  methods: {
    // responsible for css background-color to chnage on click
    selectProfile(index) {
      this.selected = index;
    },
  },
  data() {
    return {
      items: items.profiles,
      selected: false,
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.profile {
  margin-left: 30px;
  margin-right: 30px;
}

.name {
  color: black;
  margin-top: 10px;
}

.medaillon {
  border-radius: 50%;
}
</style>
