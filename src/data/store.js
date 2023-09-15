import { reactive } from "vue";

export const store = reactive({
  movies: [],
  series: [],
  baseUriSeries: "https://api.themoviedb.org/3/search/tv?",
  baseUriMovie: "https://api.themoviedb.org/3/search/movie?",
  apiKey: "4261ce9596d07e5864830c4cfe387194",
});
