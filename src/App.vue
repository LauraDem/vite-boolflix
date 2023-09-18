<script>
import AppHeader from "./components/AppHeader.Vue";
import AppMain from "./components/AppMain.Vue";

export default {
  components: { AppHeader, AppMain },
};
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss">
@use "./assets/scss/style.scss" as *;
</style>
