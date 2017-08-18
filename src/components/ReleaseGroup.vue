<template>
  <div>
    <div class="card card-inverse">
      <div class="card-block my-dark">
        <h4 class="card-title"></h4>
        <p class="card-text">
          {{ releaseGroup.artist }} - {{ releaseGroup.album }} [{{ releaseGroup.original_release_year }}]
        </p>
        <p class="card-text">
          <release v-for="release in releaseGroup.releases" v-bind:release="release">
          </release>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import Release from './Release.vue';

  export default {
    props: ['releaseGroup'],
    components: {
      Release
    },
    data: function () {
      return {
        releases: []
      };
    },
    created() {
      console.log(this.releaseGroup);
    }/*,
  beforeCreate() {
    this.$http.get('https://api.topkek.us/group/' + this.releaseGroup.groupId + '/releases/').then(response => {
      this.releases = response.data;
    });
  }*/
  };
</script>

<style>
</style>