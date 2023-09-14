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
      <div class="row g-3 row-cols-2 row-cols-md-3 row-cols-lg-5">
        <AppCard
          v-for="movie in store.movies"
          :key="movie.id"
          :title="movie.title"
          :original_title="movie.original_title"
          :original_language="movie.original_language"
          :vote_average="movie.vote_average"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
