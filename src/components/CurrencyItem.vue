<template>
  <section class="currencyItem">
    <p class="currency__name">
      {{ name }}
    </p>
    <p class="currency__value">{{ value }}</p>
  </section>
</template>

<script>
export default {
  props: {
    name: String,
    value: Number,
  },
};
</script>

<style></style>
