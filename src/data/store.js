import { reactive } from "vue";

export const store = reactive({
  movies: [],
  baseUri: "https://api.themoviedb.org/3/search/movie?",
  apiKey: "api_key=4261ce9596d07e5864830c4cfe387194&query=",
});
