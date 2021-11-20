import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state() {
    return {
      currency: [],
      baseCurrency: 'Рубли',
      arrayFiltered: null,
      checkboxOptions: null,
      selectedValute: '',
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
        return (
          item[0] === 'USD' ||
          item[0] === 'EUR' ||
          item[0] === 'GBP' ||
          item[0] === 'CAD'
        );
      });
      return (state.arrayFiltered = arrayFiltered);
    },
    getCheckboxOptions(state) {
      const checkboxOptions = [];
      const currencyListToArray = Object.entries(state.currency);
      const currencyNameArray = currencyListToArray.filter((item) => {
        console.log(item.Valute);
        return item.Valute;
      });
      checkboxOptions.push('RUR', ...currencyNameArray);
      console.log(checkboxOptions);
      return (state.checkboxOptions = checkboxOptions);
    },
  },
});

export default store;
