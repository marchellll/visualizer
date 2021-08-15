<template>
  <div class="h-full">
    <div
      class="
        h-full
        flex flex-row flex-shrink
        justify-evenly
        gap-px
        items-center
        content-center
      "
    >
      <div
        v-for="num in nums"
        :key="num"
        :id="`lala_${num}`"
        :ref="`lala_${num}`"
        class="num"
        :style="{ height: (num / nums.length) * max_line_height + 23 + 'px' }"
      >
        {{ num }}
      </div>
    </div>
  </div>
</template>

<script>

import anime from 'animejs';
import _ from 'lodash';
import bubbleSort from '../algorithms/sorting/bubbleSort';

export default {
  name: 'Playground',
  mounted() {
    const store = this.$store;
    const thus = this;

    store.watch((state) => state.sorting.arraySize, () => {
      thus.reset();
    });
  },
  data() {
    return {
      max_line_height: 650,
      nums: _.shuffle(Array.from({ length: this.$store.state.sorting.arraySize }, (v, i) => i + 1)),
    };
  },
  computed: {
    running() {
      return this.$store.state.sorting.running;
    },
    speed() {
      return this.$store.state.sorting.sortingSpeed;
    },
    algo() {
      return this.$store.state.sorting.algorithm;
    },
  },
  methods: {
    reset() {
      // stop execution
      this.$store.commit('sorting/running', false);

      // regenerate array
      this.nums = _.shuffle(Array.from({ length: this.$store.state.sorting.arraySize }, (v, i) => i + 1));

      // TODO: enable start button
    },
    async start() {
      // TODO:  ganti button start jadi kuning dan disable
      this.$store.commit('sorting/running', true);
      await bubbleSort(
        this.nums,
        {
          isRunning: () => this.$store.state.sorting.running, onSwap: this.animateSwap, afterSwap: this.cleanUpSwapAnimation, done: () => {},
        },
      );
    },
    async animateSwap(numA, numB) {
      await this.$nextTick();

      let leftElement = this.$refs[`lala_${numA}`];
      let rightElement = this.$refs[`lala_${numB}`];

      let leftRect = leftElement.getBoundingClientRect();
      let rightRect = rightElement.getBoundingClientRect();

      if (leftRect.x > rightRect.x) {
        const tmpRect = rightRect;
        const tmpElement = rightElement;
        rightRect = leftRect;
        rightElement = leftElement;
        leftRect = tmpRect;
        leftElement = tmpElement;
      }
      const translateX = rightRect.x - leftRect.x;

      await anime.timeline({
        easing: 'easeInOutCubic',
        duration: this.speed,
      })
        .add({
          targets: leftElement,
          scale: 1.1,
          backgroundColor: '#06D6A0',
          boxShadow: '0 40px 40px rgba(0,0,0,0.5)',
          zIndex: 3,
        })
        .add({
          targets: rightElement,
          scale: 1.1,
          backgroundColor: '#06D6A0',
          boxShadow: '0 40px 40px rgba(0,0,0,0.5)',
          zIndex: 2,
        }).finished;

      await anime.timeline({
        easing: 'easeInOutCubic',
        duration: this.speed,
      })
        .add({
          targets: leftElement,
          translateX,
        })
        .add({
          targets: rightElement,
          translateX: -translateX,
        }).finished;

      return anime.timeline({
        easing: 'easeInOutCubic',
        duration: this.speed,
      })
        .add({
          targets: leftElement,
          scale: 1,
          backgroundColor: '#118AB2',
          boxShadow: '0 0px 0px rgba(0,0,0,0.5)',
          zIndex: 0,
        })
        .add({
          targets: rightElement,
          scale: 1,
          backgroundColor: '#118AB2',
          boxShadow: '0 0px 0px rgba(0,0,0,0.5)',
          zIndex: 0,
        }).finished;
    },
    async cleanUpSwapAnimation() {
      await this.$nextTick();

      anime.set('.num', { translateX: 0 });
    },
  },
};
</script>

<style scoped>
.num {
  background-color: #118ab2;
  box-shadow: 0 0px 0px rgba(0, 0, 0, 0.5);
  @apply self-center flex-grow overflow-clip overflow-hidden inline-block align-middle;
}
</style>
