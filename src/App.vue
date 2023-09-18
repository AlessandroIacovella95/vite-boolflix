<script>
import axios from "axios";
import { store } from "./data/store";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppLoader from "./components/AppLoader.vue";
export default {
  data() {
    return {
      store,
      isLoading: false,
    };
  },
  components: { AppHeader, AppMain, AppLoader },

  methods: {
    fetchMovies(endpoint) {
      this.isLoading = true;
      axios
        .get(endpoint)
        .then((response) => {
          this.store.movies = response.data.results;
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },

    fetchSeries(endpoint) {
      this.isLoading = true;
      axios
        .get(endpoint)
        .then((response) => {
          this.store.series = response.data.results;
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          this.isLoading = false;
        });
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

    handleSearch(term) {
      this.customUriMovies(term);
      this.customUriSeries(term);
    },
  },
};
</script>

<template>
  <AppLoader loadingText="Loading productions" v-if="isLoading" />
  <header>
    <AppHeader @form-submit="handleSearch" />
  </header>
  <div class="d-flex justify-content-center">
    <p class="mt-3" v-show="store.movies.length <= 0">
      Fai la tua prima ricerca...😄
    </p>
    <p class="mt-3" v-show="this.newApiUri <= null">ciao</p>
  </div>
  <AppMain />
</template>

<style lang="scss">
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  header {
    background-color: black;
  }
}

p {
  font-size: 2.5rem;
  font-weight: 700;
}

* {
  scrollbar-width: auto;
}

*::-webkit-scrollbar {
  width: 10px;
}

*::-webkit-scrollbar-track {
  background: transparent;
}

*::-webkit-scrollbar-thumb {
  background-color: red;
}
</style>
