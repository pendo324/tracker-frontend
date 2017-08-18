<template>
  <div class="row">
    <div class="col-lg-10">
      <blog-post v-for="blogPost in blogPosts" v-bind:blogPost="blogPost">
      </blog-post>
    </div>
    <side-bar class="col-lg-2"></side-bar>
  </div>
</template>

<script>
  import BlogPost from './Blogpost.vue';
  import SideBar from './Sidebar.vue';

  export default {
    name: 'Home',
    data() {
      return {
        blogPosts: [],
        user: {}
      };
    },
    components: {
      BlogPost,
      SideBar,
    },
    beforeCreate() {
      // fetch blog posts
      this.$http.get('https://api.topkek.us/blogPosts/2').then(response => {
        this.blogPosts = response.data;
      }, err => { // eslint-disable-line no-unused-vars

      });
    }
  };

</script>

<style lang='scss'>
.card {
  background-color: transparent !important;
}
</style>