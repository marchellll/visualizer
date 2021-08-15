import { createStore, createLogger } from 'vuex';
import sorting from './modules/sorting';

const debug = process.env.NODE_ENV !== 'production';

export default createStore({
  modules: {
    sorting,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
