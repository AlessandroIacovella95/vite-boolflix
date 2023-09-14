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
          console.log(this.store.movies);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {});
    },

    customUri(term) {
      const newApiUri = this.store.baseUri + this.store.apiKey + term;
      this.fetchMovies(newApiUri);
      console.log(newApiUri);
    },
  },
};
</script>

<template>
  <AppHeader @form-submit="customUri" />
  <AppMain />
</template>

<style lang="scss"></style>
