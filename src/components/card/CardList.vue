<script>
import { store } from "../../data/store";
import CardDetail from "./CardDetail.vue";

export default {
  data() {
    return {
      title: "Card List",
      store,
    };
  },

  components: { CardDetail },
};
</script>

<template>
  <h3>{{ title }}</h3>

  <!-- <ul>
    <li v-for="movie in store.movies" :key="movie.id">
      {{ movie.name }}
      {{ movie.original_title }}
      {{ movie.language }}
      {{ movie.vote }}
    </li>
  </ul> -->
  <CardDetail v-for="movie in store.movies" :key="movie.id" :cardInfo="movie" />
</template>

<style lang="scss" scoped></style>
