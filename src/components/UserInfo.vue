<template>
  <div class="container text">
    <div class="row">
      <div class="col-lg-12">
        <span>Up: </span>
        <span>Down: </span>
        <span>Ratio: </span>
        <span>Required: </span>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <span>{{ user.username }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['user']
  };
</script>

<style>
</style>