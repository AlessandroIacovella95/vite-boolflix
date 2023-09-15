<script>
import AppMoviesList from "./movies/AppMoviesList.vue";
import AppSeriesList from "./series/AppSeriesList.vue";
export default {
  data() {
    return {};
  },
  components: { AppMoviesList, AppSeriesList },
};
</script>

<template>
  <section class="bg_main">
    <AppMoviesList />
    <AppSeriesList />
  </section>
</template>

<style lang="scss" scoped>
.bg_main {
  background-color: rgb(101, 100, 100);
}
</style>
