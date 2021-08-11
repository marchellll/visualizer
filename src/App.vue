<template>
  <!-- <div class="flex md:flex-row-reverse flex-wrap"> -->
    <!--Main Content-->
    <!-- <div class="w-full md:w-4/5 bg-gray-100">
      <div class="container bg-gray-100 pt-16 px-6"></div>
    </div> -->

    <!--Sidebar-->
    <!-- <div
      class="
        w-full
        md:w-1/5
        bg-gray-900
        md:bg-gray-900
        px-2
        text-center
        fixed
        bottom-0
        md:pt-8
        md:top-0
        md:left-0
        h-16
        md:h-screen
        md:border-r-4 md:border-gray-600
      "
    >
      <div class="md:relative mx-auto lg:float-right lg:px-6">
        <ul
          class="list-reset flex flex-row md:flex-col text-center md:text-left"
        >
          <li class="mr-3 flex-1">
            <span
                class="
                  pb-1
                  md:pb-0
                  text-xs
                  md:text-base
                  text-gray-600
                  md:text-gray-400
                  block
                  md:inline-block
                "
                >Link</span
              >
          </li>
          <li class="mr-3 flex-1">
            <span
                class="
                  pb-1
                  md:pb-0
                  text-xs
                  md:text-base
                  text-gray-600
                  md:text-gray-400
                  block
                  md:inline-block
                "
                >Link</span
              >
          </li>
          <li class="mr-3 flex-1">
            <span
                class="
                  pb-1
                  md:pb-0
                  text-xs
                  md:text-base
                  text-gray-600
                  md:text-gray-400
                  block
                  md:inline-block
                "
                >Link</span
              >
          </li>
        </ul>
      </div>
    </div>
  </div> -->
  <OptionBar
    class="
      min-h-screen
      flex flex-col flex-auto flex-shrink-0
      antialiased
      bg-gray-50
      text-gray-800
    "
  />
  <Playground />
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
  color: #2c3e50;
  margin-top: 60px;
}
</style>
