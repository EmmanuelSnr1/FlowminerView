import { createApp } from 'vue';
import { createPinia } from 'pinia';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './assets/styles/tailwind.css';  // Link to your Tailwind CSS setup


import App from './App.vue';
import router from './router';

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.mount('#app');
