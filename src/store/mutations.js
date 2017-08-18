export const STORAGE_KEY = 'tracks';

export const state = {
  user: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
};

export const mutations = {
  setUser(state, { user }) {
    state.user = user;
  },

  clearUser(state) {
    state.user = {};
  }
};
