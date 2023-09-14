<script>
import AppMoviesList from "./movies/AppMoviesList.vue";
export default {
  data() {
    return {};
  },
  components: { AppMoviesList },
};
</script>

<template>
  <section class="bg_main">
    <AppMoviesList />
  </section>
</template>

<style lang="scss" scoped>
.bg_main {
  background-color: rgb(101, 100, 100);
}
</style>
