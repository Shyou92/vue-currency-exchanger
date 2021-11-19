<template>
  <section class="currencyContainer">
    <transition appear name="fade" tag="h2">
      <h2 class="base-currency">
        Базовая валюта: {{ this.$store.state.baseCurrency }}
      </h2>
    </transition>

    <ul class="currency-list">
      <transition-group name="list" tag="ul">
        <li v-for="currency in filteredCurrencyList" :key="currency[0]">
          <CurrencyItem
            :name="currency[1].Name"
            :value="currency[1].Value"
            :nominal="currency[1].Nominal"
            :prevValue="currency[1].Previous"
          />
        </li>
      </transition-group>
    </ul>
  </section>
</template>

<script>
import CurrencyItem from '../components/CurrencyItem.vue';

export default {
  name: 'CurrencyList',
  components: {
    CurrencyItem,
  },
  computed: {
    filteredCurrencyList() {
      return this.$store.getters.getFilteredCurrencyList;
    },
  },
};
</script>

<style lang="scss" scoped>
.base-currency {
  text-align: center;
}

.currency-list ul {
  list-style-type: none;
  padding: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
