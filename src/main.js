import { createApp } from 'vue';
import store from './store';
import App from './App.vue';
import './index.css';
import './assets/tailwind.css';

const app = createApp(App);
app.use(store);
app.mount('#app');
