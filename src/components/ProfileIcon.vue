<template>
  <div class="avatarContainer">
    <div>
      <v-avatar
        class="avatar"
        size="86"
      >
        <img :src="require(`../assets/img/${img}`)"/>
      </v-avatar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileIcon',
  props: {
    img: String,
  },
};
</script>

<style scoped>
.avatarContainer {
  padding-top: 8px;
  padding-bottom: 8px;
}
.avatar {
  box-shadow: 0 1px 1px rgba(0,0,0,0.16), 0 1px 1px rgba(0,0,0,0.23);
  margin-left: 10px;
  margin-right: 10px;
}
.avatar:hover {
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}
</style>
