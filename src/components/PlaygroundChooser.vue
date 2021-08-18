<template>
  <div class="container">
    <div class="menu-item">
      <span>Playground</span>
      <select class="text-gray-500" name="algos" id="algos" v-model="playgroundType">
        <option value="sorting">Sorting</option>
        <option value="graph">Graph</option>
      </select>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PlaygroundChooser',
  computed: {
    playgroundType: {
      get() {
        return this.$store.state.main.playgroundType;
      },
      set(value) {
        this.$store.commit('main/playgroundType', value);
      },
    },
  },
};
</script>

<style scoped>
.container {
  background-color: #6A4C93;
  @apply p-4 text-gray-50 rounded-lg grid grid-rows-1 grid-cols-1 gap-4 justify-center;
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
