import { createApp } from 'vue';
import store from './store';
import App from './App.vue';
import './index.css';
import './assets/tailwind.css';

const app = createApp(App);
app.use(store);
app.mount('#app');

/**
 * Color scheme:
 *  const colors = { 'Paradise Pink': 'ef476f', 'Middle Red': 'f78c6b', 'Orange Yellow Crayola': 'ffd166', 'Caribbean Green': '06d6a0', 'Blue NCS': '118ab2', 'Midnight Green Eagle Green': '073b4c' };
 */
