import Vuex from 'vuex';
import store from './store/index.js';

export default ({
  Vue
}) => {
  Vue.use(Vuex);
  Vue.mixin({
    store: store
  });
};