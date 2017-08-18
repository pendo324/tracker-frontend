<template>
  <div>
    Format: {{ release.format }}
    Size: {{ release.file_size }}
    Snatches: {{ release.snatched }}
    Seeders: {{ release.seeders }}
    Leechers: {{ release.leechers }}
  </div>
</template>

<script>
  export default {
    props: ['release']
  };
</script>

<style>
</style>