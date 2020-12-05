<template>
  <div class="form"> Ajouter un nouvel utilisateur
    <div class="icon">
      <ProfileIcon
        img="default.png"
      />
    </div>
    <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    >
      <v-file-input
        v-model="profileimg"
        small-chips
        label="File input w/ small chips"
        :rules="[v => !!v || 'Item is required']"
        required
      >
      </v-file-input>
      <v-text-field
        v-model="firstname"
        :rules="nameRules"
        :counter="10"
        label="Prénom"
        required
      >
      </v-text-field>
      <v-btn
        :disabled="!valid"
        color="green"
        @click="validate"
      >
        Validate
      </v-btn>
    </v-form>
  </div>
</template>
<script>
import ProfileIcon from './ProfileIcon.vue';
import items from '../../data/profiles.json';

export default {
  name: 'AdminBoard',
  components: {
    ProfileIcon,
  },
  data: () => ({
    valid: true,
    firstname: '',
    profileimg: null,
    items: items.profiles,
    nameRules: [
      (v) => !!v || 'Name is required',
      (v) => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
  }),
  methods: {
    validate() {
      this.$refs.form.validate();
      console.log('confirm new user');
      console.log(this.firstname);
      console.log(this.profileimg);
    },
  },
};
</script>
<style scoped>
  .form {
    margin-left: 450px;
    margin-right: 450px;
    margin-top: 150px;
  }
  /* .icon {
    border: solid 1px black;
  } */
</style>
