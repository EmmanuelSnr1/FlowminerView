import { createApp } from 'vue';
import { createPinia } from 'pinia';
import 'flowbite';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";  // Make sure this path is correct
import '@/assets/styles/index.css';  // Ensure this is required or comment it out if duplicate

import App from './App.vue';
import router from './router';

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.mount('#app');
