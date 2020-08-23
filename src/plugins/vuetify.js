import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import fr from 'vuetify/es5/locale/fr';
import 'material-design-icons-iconfont/dist/material-design-icons.css'; // Ensure you are using css-loader

Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    locales: { fr },
    current: 'fr',
  },
  icons: {
    iconfont: 'md',
  },
});
