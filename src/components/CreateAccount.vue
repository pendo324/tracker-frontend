<template>
  <div class="container">
    <div v-if="created" class="col-lg-4 push-lg-4">
      <h3>Account created</h3>
      <p>
        An email has been sent to the account provided. Please verify your email by following the instructions in it.
      </p>
    </div>
    <div v-else class="col-lg-4 push-lg-4">
      <form v-on:submit.prevent class="form-signin">
        <h2 class="form-signin-heading">Create account</h2>
        <label for="inputUser" class="sr-only">Username</label>
        <input v-model="userName" type="text" id="inputUser" class="form-control" placeholder="Username" required autofocus>
        <label for="inputPassword" class="sr-only">Password</label>
        <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required>
        <label for="inputEmail" class="sr-only">Password</label>
        <input v-model="email" type="email" id="inputEmail" class="form-control" placeholder="you@email.com" required>
        <div class="col-lg-4 push-lg-4">
          <button v-on:click="create" class="btn btn-primary btn-block" type="submit">Create</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        userName: '',
        password: '',
        email: '',
        created: false
      };
    },
    methods: {
      create: function (event) { // eslint-disable-line no-unused-vars
        let data = {
          username: this.userName,
          password: this.password,
          email: this.email
        };
        this.$http.post('https://api.topkek.us/create', data, { withCredentials: true }).then((response) => {
          if (response.status === 200) {
            this.created = true;
          }
        }, (err) => {
          console.log(err);
        });
        console.log(data);
      }
    },
    beforeCreate() {
      console.log(this.$cookie.get('user'));
      if (this.$cookie.get('user') !== null) {
        this.$router.replace('/');
      }
    }
  };
</script>

<style>
</style>