<template>
  <div class="container">
    <button @click="emitReset">Reset</button>
    <div class="menu-item">
      <span>Array Size</span>
      <input
        v-model="arraySize"
        type="range"
        min="2"
        max="1000"
        class="slider"
        id="sizeRange"
      />
    </div>
    <div class="menu-item">
      <span>Sorting Speed</span>
      <input
        v-model="sortingSpeed"
        type="range"
        min="90"
        max="10000"
        class="slider"
        id="speedRange"
      />
    </div>
    <div class="menu-item">
      <span>Algorithm</span>
      <select class="text-gray-500" name="algos" id="algos" v-model="algorithm">
        <option v-for="name in algorithmNames" :key="name">{{ name }}</option>
      </select>
    </div>
    <button id="start" @click="emitStart">Start</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'SortingOptionBar',
  computed: {
    ...mapState('sorting', [
      'algorithmNames',
    ]),
    arraySize: {
      get() {
        return this.$store.state.sorting.arraySize;
      },
      set(value) {
        this.$store.commit('sorting/arraySize', value);
      },
    },
    sortingSpeed: {
      get() {
        return this.$store.state.sorting.sortingSpeed;
      },
      set(value) {
        this.$store.commit('sorting/sortingSpeed', value);
      },
    },
    algorithm: {
      get() {
        return this.$store.state.sorting.algorithm;
      },
      set(value) {
        this.$store.commit('sorting/algorithm', value);
      },
    },
  },
  emits: {
    reset: null,
    start: null,
  },
  methods: {
    emitReset() {
      this.$emit('reset');
    },
    emitStart() {
      this.$emit('start');
    },
  },
};
</script>

<style scoped>
.container {
  background-color: #6A4C93;
  @apply p-4 text-gray-50 rounded-lg grid grid-rows-5 grid-cols-1 gap-4 justify-center;
}

.menu-item {
  @apply text-gray-500 h-full text-center grid grid-rows-2 grid-cols-1;
}

button {
  background-color: #FF595E;
  @apply h-16 rounded-lg;
}

.menu-item span {
  @apply text-gray-50  inline-block align-middle;
}
</style>
