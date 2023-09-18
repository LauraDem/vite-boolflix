<script>
import CardDetail from "./CardDetail.vue";

export default {
  data() {
    return {
      title: "cardlist",
    };
  },

  components: { CardDetail },
};
</script>

<template>
  <h4>{{ title }}</h4>
  <CardDetail />
</template>

<style lang="scss" scoped></style>
