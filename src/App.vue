<template>
  <div class="">
    <div class="playground-chooser">
      <PlaygroundChooser
        @start="startSorting"
        @reset="resetSorting"
      />
    </div>
    <div class="sorting-bar">
      <SortingOptionBar v-if="playgroundType === 'sorting'"
        @start="startSorting"
        @reset="resetSorting"
      />
    </div>
    <div class="playground"><SortingPlayground v-if="playgroundType === 'sorting'" ref="sortingPlayground" /></div>
  </div>
</template>

<script>
import PlaygroundChooser from './components/PlaygroundChooser.vue';
import SortingOptionBar from './components/SortingOptionBar.vue';
import SortingPlayground from './components/SortingPlayground.vue';

export default {
  name: 'App',
  components: {
    PlaygroundChooser,
    SortingOptionBar,
    SortingPlayground,
  },
  computed: {
    playgroundType() {
      return this.$store.state.main.playgroundType;
    },
  },
  methods: {
    startSorting() {
      this.$refs.sortingPlayground.start();
    },
    resetSorting() {
      this.$refs.sortingPlayground.reset();
    },
  },
};

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #140f1a;
  @apply h-screen w-screen;
}

.playground-chooser {
  top: 0;
  width: 23em;
  @apply fixed left-0 px-2 pt-8 text-gray-50;
}

.playground {
  left: 23em;
  @apply fixed h-screen top-0 right-0 bottom-0 p-10
  /* TODO: handle mobile portrait */;
}

.sorting-bar {
  top: 6em;
  width: 23em;
  @apply fixed h-screen bottom-0 left-0 px-2 pt-8 text-gray-50;
  /* TODO: handle mobile portrait */
}
</style>
