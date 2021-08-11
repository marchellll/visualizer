<template>
  <div
    class="bar"
  >
    <button class="menu-item">Regenerate</button>
    <div href="#" class="menu-item"><span> Size</span></div>
    <div href="#" class="menu-item"><span>Sorting Speed</span></div>
    <div href="#" class="menu-item"><span>Algorithm</span></div>

    <button id="start" class="menu-item">Start</button>
  </div>
</template>

<script>
export default {
  name: 'OptionBar',
};
</script>

<style scoped>
.bar {
  @apply grid grid-rows-6 md:w-1/5 bg-gray-900 md:bg-gray-900 px-2 text-center fixed bottom-0 md:pt-8 md:top-0 md:left-0 h-16 md:h-screen md:border-r-4 md:border-gray-600 text-gray-50
}

.menu-item {
  @apply text-gray-50 h-full text-center
}

.menu-item span {
  @apply text-gray-50  inline-block align-middle
}

</style>
