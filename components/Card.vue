<template>
  <div class="card mb-8" :class="cardClassess">
    <header class="card-header">
      <p class="card-header-title has-text-grey">
        {{ title }}
      </p>
    </header>
    <div class="card-content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    theme: {
      type: String,
      required: false,
      default: "white"
    }
  },
  computed: {
    cardClassess() {
      if (this.theme === "primary") return "has-background-primary card-theme";
      if (this.theme === "info") return "has-background-info card-theme";
      if (this.theme === "dark") return "has-background-dark card-theme";
    }
  }
};
</script>
<style scoped>
.card-theme .card-header-title,
.card-theme .card-content {
  color: #fff !important;
}
</style>
