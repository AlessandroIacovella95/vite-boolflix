<script>
import axios from "axios";
import { store } from "./data/store";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
export default {
  data() {
    return {
      store,
    };
  },
  components: { AppHeader, AppMain },

  methods: {
    fetchMovies(endpoint) {
      axios
        .get(endpoint)
        .then((response) => {
          this.store.movies = response.data.results;
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {});
    },

    fetchSeries(endpoint) {
      axios
        .get(endpoint)
        .then((response) => {
          this.store.series = response.data.results;
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {});
    },

    customUriMovies(term) {
      const newApiUri =
        this.store.baseUriMovie +
        "api_key=" +
        this.store.apiKey +
        "&query=" +
        term;
      this.fetchMovies(newApiUri);
    },

    customUriSeries(term) {
      const newApiUri =
        this.store.baseUriSeries +
        "api_key=" +
        this.store.apiKey +
        "&query=" +
        term;
      this.fetchSeries(newApiUri);
    },
  },
};
</script>

<template>
  <header>
    <AppHeader
      @form-submit="customUriMovies"
      @form-submit-series="customUriSeries"
    />
  </header>
  <AppMain />
</template>

<style lang="scss">
header {
  background-color: black;
}
</style>
