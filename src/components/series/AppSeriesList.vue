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
  <div class="container" :class="store.series.length > 0 ? 'pb-5' : ''">
    <h3
      class="my-5 pt-3 text-danger text-center"
      v-show="store.series.length > 0"
    >
      Lista SerieTv:
    </h3>
    <div
      class="row justify-content-center gap-5 row-cols-2 row-cols-md-3 row-cols-lg-5"
    >
      <AppCardSeries
        v-for="serie in store.series"
        :key="serie.id"
        :poster_path="serie.poster_path"
        :overview="serie.overview"
        :title="serie.name"
        :original_title="serie.original_name"
        :original_language="serie.original_language"
        :vote_average="Math.ceil(serie.vote_average / 2)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
h3 {
  font-weight: 700;
}
</style>
