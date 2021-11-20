<template>
  <section class="home">
    <div class="home__header-container">
      <h2 class="home__header">Добро пожаловать, Александр</h2>
      <router-link to="/currencylist" class="redirect">Курс валют</router-link>
    </div>

    <div class="home__currency-container">
      <p class="home__currency-container-text">Введите сумму:</p>
      <input type="text" name="" id="" class="home__currency-value" />
      <select name="" id="">
        <option v-for="(item, key) in checkboxOptions" :key="key" :value="item">
          {{ item }}
        </option>
      </select>
      <p class="home__cyrrency-calculated">
        100 {{ this.$store.state.baseCurrency }}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    checkboxOptions() {
      const arr = Object.entries(this.$store.state.currency.Valute);
      const valute = [];
      arr.filter((item) => {
        valute.push(item[0]);
      });
      return valute;
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__header-container {
    width: 100%;
    position: relative;
  }

  &__header {
    width: inherit;
    text-align: center;
  }
}

.redirect {
  position: absolute;
  top: -30px;
  left: calc(87%);
  text-decoration: none;
  color: rgb(122, 116, 116);
  height: 30px;
  font-size: 24px;
  background-color: #fff;
  padding: 3px;
  border-radius: 6px;
  cursor: pointer;
  transition: 1.2s;

  &:hover {
    padding: 5px;
  }
}
</style>
