<template>
  <main>
    <CurrencyList />
  </main>
</template>

<script>
import './vendor/normalize.css';
import CurrencyList from './views/CurrencyList.vue';

export default {
  name: 'App',
  components: {
    CurrencyList,
  },
  data() {
    return {
      currency: null,
    };
  },
  mounted() {
    this.$store.dispatch('getCurrency');
  },
};
</script>

<style></style>
