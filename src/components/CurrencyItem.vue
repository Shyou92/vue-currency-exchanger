<template>
  <section class="currencyItem">
    <div class="roubles">
      <p class="roubles__name">{{ nominal }} {{ name }}</p>
    </div>
    <div class="currency">
      <p
        class="currency__value"
        :style="{ color: currencyDifference > '↗' ? 'red' : 'green' }"
      >
        {{ computedValue }}
        {{ currencyDifference }}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    name: String,
    value: Number,
    prevValue: Number,
    nominal: Number,
  },
  computed: {
    currencyDifference() {
      const difference = this.prevValue - this.value;
      return difference > 0 ? '↘' : '↗';
    },
    computedValue() {
      return Math.round(parseFloat(this.value) * 100) / 100;
    },
  },
};
</script>

<style lang="scss" scoped>
.currencyItem {
  border-radius: 8px 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 30%;
  margin: 0 auto 10px;
  box-shadow: 2px 2px 5px $currencyItemBoxshadowColor;
  cursor: pointer;
  transition: 0.7s;
  min-height: 160px;

  &:hover {
    box-shadow: 4px 4px 8px $currencyItemBoxshadowColor;
    border-radius: 12px 10px;
  }
}

.roubles {
  display: flex;
  border-bottom: 0.5px solid rgb(148, 148, 148);
  display: flex;
  justify-content: space-around;
  width: 90%;
  margin-top: 10px;
  padding-bottom: 10px;

  &__name {
    text-align: center;
    margin: 5px 0;
    width: 80%;
    font-size: 25px;
  }
}
</style>
>
