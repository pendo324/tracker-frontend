<template>
  <div class="sidebar card card-inverse my-dark">
    <div class="card-block my-dark">
      <h4 class="card-title">Info group 1</h4>
      <div class="card-text">
        <p>Lorem ipsum dolor,</p>
        <p>consectetur adipiscing.</p>
        <p>Maecenas condimentum,</p>
        <p>placerat elit nec,</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style lang='scss'>
$radius: 0em;

.sidebar .card-block {
  background: #373a3c;
  border-radius: $radius;
  border-color: #1a1a1a !important;
}

.sidebar .card {
  border-radius: $radius !important;
  border-color: #1a1a1a !important;
}
</style>