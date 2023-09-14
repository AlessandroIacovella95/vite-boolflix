<script>
export default {
  data() {
    return {};
  },
  props: {
    title: String,
    original_title: String,
    original_language: String,
    vote_average: String,
  },
};
</script>

<template>
  <section class="container">
    <ul>
      <li>{{ title }}</li>
      <li>{{ original_title }}</li>
      <li>{{ original_language }}</li>
      <li>{{ vote_average }}</li>
    </ul>
  </section>
</template>

<style lang="scss" scoped></style>
