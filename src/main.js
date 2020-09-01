import VueSVGIcon from 'vue-svgicon';
import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;
Vue.use(VueSVGIcon);

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount('#app');
