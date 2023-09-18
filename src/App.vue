<script>
import { store } from "./data/store";
import axios from "axios";

import AppHeader from "./components/AppHeader.Vue";
import AppMain from "./components/AppMain.Vue";

export default {
  data() {
    return {
      store,
    };
  },

  components: { AppHeader, AppMain },

  methods: {
    fetchMovies(queryString) {
      axios
        .get("https://api.themoviedb.org/3/search/movie", {
          params: {
            query: queryString,
            api_key: "2c1ab6c0bd848ee439d925f6a5b76bc4",
          },
        })

        .then((response) => {
          console.log(response.data.results);
          store.movies = response.data.results.map((movie) => {
            const {
              id,
              title,
              original_title,
              original_language,
              vote_average,
            } = movie;
            return {
              id,
              name: title,
              original_title,
              language: original_language,
              vote: vote_average,
            };
          });
        });
    },
  },

  created() {
    // this.fetchMovies();
  },
};
</script>

<template>
  <AppHeader @start-search="fetchMovies" />
  <AppMain />
</template>

<style lang="scss">
@use "./assets/scss/style.scss" as *;
</style>
