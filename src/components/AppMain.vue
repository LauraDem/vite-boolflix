<script>
import CardList from "./card/CardList.vue";

export default {
  data() {
    return {
      title: "App Main",
    };
  },
  components: {
    CardList,
  },
};
</script>

<template>
  <main class="container mt-5">
    <CardList />
  </main>
</template>

<style lang="scss" scoped></style>
