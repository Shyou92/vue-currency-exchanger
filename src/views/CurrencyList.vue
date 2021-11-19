<template>
  <section class="currencyList">
    <ul>
      <li
        v-for="currency in this.$store.getters.getFilteredCurrencyList"
        :key="currency[0]"
      >
        <CurrencyItem :name="currency[1].Name" :value="currency[1].Value" />
      </li>
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
};
</script>
