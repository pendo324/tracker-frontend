import { STORAGE_KEY } from './mutations';
import createLogger from 'vuex/dist/logger';

const localStoragePlugin = store => {
  store.subscribe((mutation, { user }) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  });
};

export default process.env.NODE_ENV !== 'production' ? [createLogger(), localStoragePlugin] : [localStoragePlugin];
