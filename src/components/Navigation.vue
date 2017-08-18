<template>
  <nav class="navbar navbar-fixed-top navbar-dark bg-inverse">
    <router-link class="navbar-brand" to="/">
      <img alt="Brand" src="~assets/images/logo.png" height="20">
    </router-link>
    <ul class="nav navbar-nav">
      <router-link class="nav-item" tag="li" to="/" exact>
        <a class="nav-link"><i class="fa fa-home"></i> Home</a>
      </router-link>
      <router-link class="nav-item" tag="li" to="/forums" exact>
        <a class="nav-link">Forums</a>
      </router-link>
      <router-link class="nav-item" tag="li" to="/wiki" exact>
        <a class="nav-link">Wiki</a>
      </router-link>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'Navigation'
  };
</script>

<style>
</style>