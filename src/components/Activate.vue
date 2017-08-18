<template>
  <div class="container">
    <div class="activated">
      <h3>Account activated!</h3>
      <span>Click <router-link :to="{ path: '/login'}">here</router-link> to login.</span>
    </div>
  </div>
</template>

<script>
  export default {
    beforeCreate() {
      this.$http.get('https://api.topkek.us/activate/' + this.$route.params.code).then(response => { // eslint-disable-line no-unused-vars
        console.log('activated...');
      });
    }
  };
</script>

<style lang='scss'>
.activated {
  padding: 3rem 1.5rem;
  text-align: center;
}
</style>