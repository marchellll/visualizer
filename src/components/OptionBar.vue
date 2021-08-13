<template>
    <div class="container">
      <button>Reset</button>
      <div class="menu-item">
        <span> Size</span>
        <input
          type="range"
          min="5"
          max="200"
          value="50"
          class="slider"
          id="myRange"
        />
      </div>
      <div class="menu-item">
        <span>Sorting Speed</span>
        <input
          type="range"
          min="5"
          max="200"
          value="50"
          class="slider"
          id="myRange"
        />
      </div>
      <div class="menu-item">
        <span>Algorithm</span>
        <select class="text-gray-500" name="cars" id="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <button id="start">Start</button>
    </div>

</template>

<script>
export default {
  name: 'OptionBar',
};
</script>

<style scoped>
.container {
  background-color: #F78C6B;
  @apply p-4 text-gray-50 rounded-lg grid grid-rows-6 grid-cols-1 gap-4 justify-center;
}

.menu-item {
  @apply text-gray-50 h-full text-center grid grid-rows-2 grid-cols-1;
}

button {
  background-color: #EF476F;
  @apply h-16 rounded-lg;
}

.menu-item span {
  @apply text-gray-50  inline-block align-middle;
}
</style>
