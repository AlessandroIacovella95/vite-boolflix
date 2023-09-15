<script>
import { store } from "../../data/store";
import AppCard from "./AppCard.vue";
export default {
  data() {
    return {
      store,
    };
  },
  components: { AppCard },
};
</script>

<template>
  <section>
    <div class="container">
      <h3 class="mb-5 pt-3 text-light">Lista Film:</h3>
      <div class="row g-3 row-cols-2 row-cols-md-3 row-cols-lg-5">
        <AppCard
          v-for="movie in store.movies"
          :key="movie.id"
          :poster_path="movie.poster_path"
          :title="movie.title"
          :original_title="movie.original_title"
          :original_language="movie.original_language"
          :vote_average="Math.ceil(movie.vote_average / 2)"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
