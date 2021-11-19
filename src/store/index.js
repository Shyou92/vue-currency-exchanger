import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state() {
    return {
      currency: null,
      baseCurrency: 'Рубли',
      arrayFiltered: null,
    };
  },
  mutations: {
    getData(state, data) {
      state.currency = data;
    },
  },
  actions: {
    getCurrency({ commit }) {
      axios.get('https://www.cbr-xml-daily.ru/daily_json.js').then((res) => {
        commit('getData', res.data);
      });
    },
  },
  getters: {
    getFilteredCurrencyList(state) {
      if (state.currency === null) {
        return;
      }
      const currencyArray = Object.entries(state.currency.Valute);
      const arrayFiltered = currencyArray.filter((item) => {
        return item[0] === 'USD' || item[0] === 'EUR' || item[0] === 'GBP';
      });
      return (state.arrayFiltered = arrayFiltered);
    },
  },
});

export default store;
