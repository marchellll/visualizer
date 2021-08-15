/* eslint-disable no-param-reassign */

import names from '../../algorithms/sorting/names';

const state = () => ({
  arraySize: 245,
  sortingSpeed: 200,
  algorithmNames: names,
  algorithm: names[0],
});

const getters = {};

const actions = {};

const mutations = {
  arraySize(_state, arraySize) {
    _state.arraySize = parseInt(arraySize, 10);
  },
  sortingSpeed(_state, sortingSpeed) {
    _state.sortingSpeed = parseInt(sortingSpeed, 10);
  },
  algorithm(_state, algorithm) {
    _state.algorithm = algorithm;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
