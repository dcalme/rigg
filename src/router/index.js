import Vue from 'vue';
import Router from 'vue-router';

/* Components */
import TaskGrid from '../components/TaskGrid.vue';
import WeekBoard from '../components/WeekBoard.vue';
import MonthBoard from '../components/MonthBoard.vue';
import StartBoard from '../components/StartBoard.vue';
import SuccesScreen from '../components/SuccesScreen.vue';
import ErrorScreen from '../components/ErrorScreen.vue';
import AdminBoard from '../components/AdminBoard.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: TaskGrid },
    { path: '/week', component: WeekBoard },
    { path: '/month', component: MonthBoard },
    { path: '/start', component: StartBoard },
    { path: '/succeed', component: SuccesScreen },
    { path: '/admin', component: AdminBoard },
    { path: '/*', component: ErrorScreen },
  ],
});
