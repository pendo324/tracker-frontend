<template>
  <div>
    <div class="card card-inverse">
      <div class="card-block my-dark">
        <h4 class="card-title">{{ blogPost.title }}</h4>
        <p class="card-text">
          <vue-markdown>{{ blogPost.content }}</vue-markdown>
        </p>
        <p class="card-text">
          <small class="text-muted">Posted {{ format(blogPost.timestamp) }}</small>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import VueMarkdown from 'vue-markdown';
  import moment from 'moment';

  export default {
    components: {
      VueMarkdown
    },
    props: ['blogPost'],
    methods: {
      format: (date) => {
        return moment(date).fromNow();
      }
    }
  };
</script>

<style lang='scss'>
.card-block {
  background: #373a3c;
  border-radius: .5em;
}

.card {
  border-radius: .5em !important;
}
</style>