<template>
  <div class="container">
    <div class="col-lg-4 push-lg-4">
      <form v-on:submit.prevent class="form-signin">
        <h2 class="form-signin-heading">Please sign in</h2>
        <label for="inputUser" class="sr-only">Username</label>
        <input v-model="userName" type="text" id="inputUser" class="form-control" placeholder="Username" required autofocus>
        <label for="inputPassword" class="sr-only">Password</label>
        <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required>
        <div class="checkbox">
          <label>
          <input type="checkbox" value="remember-me"> Remember me
        </label>
        </div>
        <div class="col-lg-4 push-lg-4">
          <button v-on:click="login" class="btn btn-primary btn-block" type="submit">Sign in</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';

  export default {
    data: function () {
      return {
        userName: '',
        password: ''
      };
    },
    methods: {
      login: function (event) { // eslint-disable-line no-unused-vars
        let data = {
          username: this.userName,
          password: this.password
        };
        this.$http.post('http://api.topkek.us/login', data, { credentials: true }).then((response) => {
          this.$store.state.commit('setUser', { user: response.data });
        }, (err) => {
          console.log(err);
        });
        console.log(data);
      }
    },
    beforeRouteEnter(to, from, next) { // eslint-disable-line no-unused-vars
      Vue.http.get('https://api.topkek.us/logged', { credentials: true }).then(response => {
        if (response.status === 200) {
          next('/');
        }
        next();
      }, err => { // eslint-disable-line no-unused-vars
        next();
      });
    }
  };
</script>

<style lang='scss'>
</style>