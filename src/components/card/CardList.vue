<script>
import { store } from "../../data/store";
import CardDetail from "./CardDetail.vue";

export default {
  data() {
    return {
      store,
    };
  },

  components: { CardDetail },
};
</script>

<template>
  <!-- <ul>
    <li v-for="movie in store.movies" :key="movie.id">
      {{ movie.name }}
      {{ movie.original_title }}
      {{ movie.language }}
      {{ movie.vote }}
    </li>
  </ul> -->

  <section>
    <h2>Movies</h2>
    <CardDetail
      v-for="movie in store.movies"
      :key="movie.id"
      :cardInfo="movie"
    />
  </section>
  <section>
    <h2>Tv Series</h2>
    <CardDetail
      v-for="tvSerie in store.tvSeries"
      :key="tvSerie.id"
      :cardInfo="tvSerie"
    />
  </section>
</template>

<style lang="scss" scoped></style>
