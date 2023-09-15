<script>
import { store } from "../../data/store";
import AppCardSeries from "./AppCardSeries.vue";
export default {
  data() {
    return {
      store,
    };
  },
  components: { AppCardSeries },
};
</script>

<template>
  <section>
    <div class="container">
      <h3 class="mb-4 pt-3">Lista SerieTv:</h3>
      <div class="row g-3 row-cols-2 row-cols-md-3 row-cols-lg-5">
        <AppCardSeries
          v-for="serie in store.series"
          :key="serie.id"
          :title="serie.name"
          :original_title="serie.original_name"
          :original_language="serie.original_language"
          :vote_average="Math.ceil(serie.vote_average)"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
