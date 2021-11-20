import axios from 'axios';
import VueAxios from 'vue-axios';
import { createApp } from 'vue';
import router from './routes';
import store from './store';
import App from './App.vue';

const app = createApp(App);

app.use(store).use(VueAxios, axios).use(router).mount('#app');
