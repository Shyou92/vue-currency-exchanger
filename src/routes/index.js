import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import CurrencyList from '../views/CurrencyList.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/currencylist',
    name: 'CurrencyList',
    component: CurrencyList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
