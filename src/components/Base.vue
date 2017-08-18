<template>
  <div class="container">
    <div class="row">
      <user-info v-bind:user="user"></user-info>
      <search-bar></search-bar>
    </div>
    <div class="row">
      <div class="col-lg-10">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import UserInfo from './UserInfo.vue';
  import SearchBar from './SearchBar.vue';
  import store from './../store';
  //import './home.scss';

  export default {
    name: 'Base',
    computed: {
      user() {
        return this.$store.state.user;
      }
    },
    components: {
      UserInfo,
      SearchBar
    },
    beforeRouteEnter(to, from, next) { // eslint-disable-line no-unused-vars
      Vue.http.get('https://api.topkek.us/logged', { credentials: true }).then(response => {
        next(vm => {
          vm.$store.commit('setUser', { user: response.data });
        });
      }, err => { // eslint-disable-line no-unused-vars
        store.commit('clearUser');
        next({
          path: '/login'
        });
      });
    }
  };
</script>

<style>
</style>