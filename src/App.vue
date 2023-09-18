<script>
import { store } from "./data/store";
import axios from "axios";

import AppHeader from "./components/AppHeader.Vue";
import AppMain from "./components/AppMain.Vue";

export default {
  // data() {
  //   return {
  //     store,
  //   };
  // },

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
          // console.log(response.data.results);
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

          store.movies = moviesData;
        });
    },

    fetchTvSeries(queryString) {
      axios
        .get("https://api.themoviedb.org/3/search/tv", {
          params: {
            query: queryString,
            api_key: "2c1ab6c0bd848ee439d925f6a5b76bc4",
          },
        })
        .then((response) => {
          // mappare i dati
          console.log(response.data.results);
          const tvSeriesData = response.data.results.map((tvSerie) => {
            const id = tvSerie.id;
            const name = tvSerie.name;
            const original_title = tvSerie.original_name;
            const language = tvSerie.original_language;
            const vote = tvSerie.vote_average;

            return {
              id,
              name,
              original_title,
              language,
              vote,
            };
          });

          store.tvSeries = tvSeriesData;

          // console.log(tvSeriesData);
          // mettere i dati nello store
        });
    },

    handleSrc(queryString) {
      if (!queryString) return;

      this.fetchMovies(queryString);
      this.fetchTvSeries(queryString);
    },
  },
};
</script>

<template>
  <AppHeader @start-search="handleSrc" />
  <AppMain />
</template>

<style lang="scss">
@use "./assets/scss/style.scss" as *;
</style>
