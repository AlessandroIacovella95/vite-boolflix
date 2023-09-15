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
      <h3 class="mb-5 pt-3 text-light" v-if="store.series.length > 0">
        Lista SerieTv:
      </h3>
      <div class="row g-3 row-cols-2 row-cols-md-3 row-cols-lg-5">
        <AppCardSeries
          v-for="serie in store.series"
          :key="serie.id"
          :poster_path="serie.poster_path"
          :title="serie.name"
          :original_title="serie.original_name"
          :original_language="serie.original_language"
          :vote_average="Math.ceil(serie.vote_average / 2)"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
h3 {
  margin-left: 35px;
}
</style>
