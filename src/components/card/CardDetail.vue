<script>
import { flags, poster } from "../../data/data";

export default {
  props: {
    cardInfo: Object,
  },

  computed: {
    hasFlag() {
      const yesFlags = ["en", "it"];
      return yesFlags.includes(this.cardInfo.language);
    },

    flagSrc() {
      const flagUrl = new URL(flags[this.cardInfo.language], import.meta.url);

      return flagUrl.href;
    },

    posterSrc() {
      if (!this.cardInfo.posterPath) return poster.placeholder;
      return `${poster.baseUrl}${poster.size}${this.cardInfo.posterPath}`;
    },
  },
};
</script>

<template>
  <div class="card">
    <div class="card-body">
      <ul>
        <li>{{ cardInfo.language }}</li>
        <li>{{ cardInfo.original_title }}</li>
        <li v-if="hasFlag">
          <img :src="flagSrc" :alt="cardInfo.language" />
        </li>
        <li>{{ cardInfo.vote }}</li>
        <li>
          <img :src="posterSrc" :alt="cardInfo.name" />
        </li>

        <li>
          <font-awesome-icon icon="fa-solid fa-star" />
          <font-awesome-icon icon="fa-regular fa-star" />
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
