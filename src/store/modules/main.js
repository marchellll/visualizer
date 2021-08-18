/* eslint-disable no-param-reassign */

const state = () => ({
  playgroundType: 'sorting',
});

const getters = {};

const actions = {};

const mutations = {
  playgroundType(_state, type) {
    _state.playgroundType = type;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
