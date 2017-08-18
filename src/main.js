import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import 'src/style.scss';
import Loader from 'components/Loader';
import VueCookie from 'vue-cookie';
import routes from 'src/routes';
import store from './store';

// import Navigation from 'components/Navigation/navigation';

Vue.use(VueCookie);
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuex);


export const LoadingState = new Vue();

export const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active',
});

export const App = new Vue({
  router,
  store,
  components: {
    Loader,
  },

  data() {
    return {
      isLoading: false,
    };
  },

  created() {
    LoadingState.$on('toggle', (isLoading) => {
      this.isLoading = isLoading;
    });
  },
}).$mount('#app');
