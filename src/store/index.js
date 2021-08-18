import { createStore, createLogger } from 'vuex';
import main from './modules/main';
import sorting from './modules/sorting';

const debug = process.env.NODE_ENV !== 'production';

export default createStore({
  modules: {
    sorting,
    main,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
