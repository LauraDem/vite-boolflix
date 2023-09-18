<script>
export default {
  data() {
    return {
      term: "",
    };
  },

  emits: ["start-search"],
};
</script>

<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"> Bootstrap </a>
      <form
        @submit.prevent="$emit('start-search', term)"
        class="d-flex"
        role="search"
      >
        <input
          v-model="term"
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />

        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>
