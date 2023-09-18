<script>
export default {
  props: {
    cardInfo: Object,
  },
};
</script>

<template>
  <div class="card">
    <div class="card-body">
      {{ cardInfo.name }}
      {{ cardInfo.original_title }}
      {{ cardInfo.language }}
      {{ cardInfo.vote }}
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
