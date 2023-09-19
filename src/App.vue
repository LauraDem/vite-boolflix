<script>
import { store } from "./data/store";
import { api } from "./data/data";
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
        .get(api.base_url_movies, {
          params: {
            query: queryString,
            api_key: api.key,
          },
        })

        .then((response) => {
          // console.log(response.data.results);
          const moviesData = response.data.results.map((movie) => {
            const id = movie.id;
            const name = movie.title;
            const original_title = movie.original_title;
            const language = movie.original_language;
            const vote = movie.vote_average;
            const posterPath = movie.poster_path;
            return {
              id,
              name,
              original_title,
              language,
              vote,
              posterPath,
            };
          });

          store.movies = moviesData;
        });
    },

    fetchTvSeries(queryString) {
      axios
        .get(api.base_url_tv_series, {
          params: {
            query: queryString,
            api_key: api.key,
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
            const posterPath = tvSerie.poster_path;

            return {
              id,
              name,
              original_title,
              language,
              vote,
              posterPath,
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
