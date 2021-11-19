<template>
  <main>
    <CurrencyList />
    <!-- <button @click="getStore()">first Click</button> -->
  </main>
</template>

<script>
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
  // methods: {
  //   getStore() {
  //     console.log(this.$store.state.currency);
  //   },
  // },
};
</script>

<style></style>
