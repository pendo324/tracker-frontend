<template>
  <div class="row">
    <div class="container">
      <release-group class="row" v-for="releaseGroup in releaseGroups" v-bind:releaseGroup="releaseGroup">
      </release-group>
    </div>
  </div>
</template>

<script>
  import ReleaseGroup from './ReleaseGroup.vue';

  export default {
    components: {
      ReleaseGroup
    },
    data: function () {
      return {
        releaseGroups: []
      };
    },
    computed: {
      searchString: function () {
        return this.$route.query.search;
      }
    },
    watch: {
      searchString: function (newVal) {
        this.updateResults(newVal);
        console.log(newVal);
      }
    },
    created() {
      if (this.$route.query.search) {
        console.log(this.updateResults);
        this.updateResults(this.$route.query.search);
      }
    },
    methods: {
      updateResults: function (searchString) {
        this.$http.get('https://api.topkek.us/release/search/', { params: { q: searchString } }).then(response => {
          console.log(response.data);
          this.releaseGroups = response.data;
        });
      }
    }
  };
</script>

<style>
</style>