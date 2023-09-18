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
  <div class="container mt-5">
    <CardList />
  </div>
</template>

<style lang="scss" scoped></style>
