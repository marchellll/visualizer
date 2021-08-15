<template>
  <div class="flex md:flex-row-reverse flex-wrap">
    <div class="bar">
      <OptionBar
        @start="start"
        @reset="reset"
      />
    </div>
    <div class="playground"><Playground ref="playground" /></div>
  </div>
</template>

<script>
import OptionBar from './components/OptionBar.vue';
import Playground from './components/Playground.vue';

export default {
  name: 'App',
  components: {
    OptionBar,
    Playground,
  },
  methods: {
    start() {
      this.$refs.playground.start();
    },
    reset() {
      this.$refs.playground.reset();
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
  color: #073b4c;
  margin-top: 60px;
}

.playground {
  left: 23em;
  background-color: #073b4c;
  @apply fixed h-screen top-0 right-0 bottom-0 p-10
  /* TODO: handle mobile portrait */;
}

.bar {
  width: 23em;
  background-color: #073b4c;
  @apply fixed h-screen bottom-0 top-0 left-0 px-2 pt-8 text-gray-50;
  /* TODO: handle mobile portrait */
}
</style>
