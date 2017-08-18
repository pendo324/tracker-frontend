<template>
  <div class="container">
    <form v-on:submit.prevent class="form-inline" style="padding: 1em 0em 1em 0em;">
      <div class="form-group text">
        <input v-model="torrentsInput" v-on:keyup.enter="getReleases(torrentsInput)" class="input-dark" type="text" placeholder="Torrents" id="torrents"/>
        <input v-model="artistsInput" v-on:keyup.enter="getReleases" class="input-dark" type="text" placeholder="Artist" id="artist"/>
        <input v-model="forumsInput" v-on:keyup.enter="getReleases" class="input-dark" type="text" placeholder="Forums" id="forums"/>
        <input v-model="usersInput" v-on:keyup.enter="getReleases" class="input-dark" type="text" placeholder="Users" id="users"/>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        torrentsInput: '',
        artistsInput: '',
        forumsInput: '',
        usersInput: ''
      };
    },
    methods: {
      getReleases(searchTerm) {
        this.$router.push({
          name: 'releases',
          query: { search: searchTerm }
        });
      }
    }
  };
</script>

<style>
</style>