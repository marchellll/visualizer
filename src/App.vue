<template>
  <div class="flex md:flex-row-reverse flex-wrap">
    <div class="bar"><OptionBar/></div>
    <div class="playground"><Playground /></div>
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
};

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #073B4C;
  margin-top: 60px;
}

.playground {
  left: 23em;
  background-color: #073B4C;
  @apply fixed h-screen top-0 right-0 bottom-0 p-10
  /* TODO: handle mobile portrait */
}

.bar {
  width: 23em;
  background-color: #073B4C;
  @apply fixed h-screen bottom-0 top-0 left-0 px-2 pt-8 text-gray-50;
  /* TODO: handle mobile portrait */
}

</style>
