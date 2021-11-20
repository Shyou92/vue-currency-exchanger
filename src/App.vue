<template>
  <main class="app">
    <transition appear name="fade" tag="h2">
      <h2 class="base-currency">
        Базовая валюта: {{ this.$store.state.baseCurrency }}
      </h2>
    </transition>
    <router-view />
  </main>
</template>

<script>
import './vendor/normalize.css';

export default {
  name: 'App',
  mounted() {
    this.$store.dispatch('getCurrency');
  },
};
</script>

<style lang="scss" scoped>
.app {
  min-height: 100vh;
  background-color: rgb(221, 221, 221);
}

.base-currency {
  text-align: center;
  margin: 0;
  padding: 20px 0;
}
</style>
