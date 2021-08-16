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
        :style="{ height: (num / nums.length) * max_line_height + 'px' }"
      >
        {{ num }}
      </div>
    </div>
  </div>
</template>

<script>

import anime from 'animejs';
import _ from 'lodash';
import sortingAlgos from '../algorithms/sorting';
import color from '../colors';

anime.suspendWhenDocumentHidden = false;

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
      max_line_height: 600,
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
      console.log('this.algo', this.algo);
      console.log('sortingAlgos', sortingAlgos);
      const algoFn = sortingAlgos[this.algo].fn;
      await algoFn(
        this.nums,
        {
          isRunning: () => this.running,
          onComparing: this.animateComparing,
          onSwap: this.animateSwap,
          afterSwap: this.cleanUpSwapAnimation,
          onPivotChoosen: this.highlightPivot,
          onPivotDismiss: this.unhighlightPivot,
          log: console.log,
        },
      );
    },
    async animateComparing(numA, numB) {
      await this.$nextTick();
      const leftElement = this.$refs[`lala_${numA}`];
      const rightElement = this.$refs[`lala_${numB}`];

      await anime.timeline({
        easing: 'easeInOutCubic',
        duration: this.speed,
        direction: 'alternate',
      })
        .add({
          targets: [leftElement, rightElement],
          backgroundColor: color.checkItem,
        }).finished;
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
        duration: this.speed * 2,
      })
        .add({
          targets: leftElement,
          scale: 1.1,
          backgroundColor: color.swappingItem,
          boxShadow: '0 40px 40px rgba(0,0,0,0.5)',
          zIndex: 10,
        })
        .add({
          targets: rightElement,
          scale: 1.1,
          backgroundColor: color.swappingItem,
          boxShadow: '0 40px 40px rgba(0,0,0,0.5)',
          zIndex: 20,
        }, 0).finished;

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
        }, 0).finished;

      return anime.timeline({
        easing: 'easeInOutCubic',
        duration: this.speed,
      })
        .add({
          targets: leftElement,
          scale: 1,
          backgroundColor: color.item,
          boxShadow: '0 0px 0px rgba(0,0,0,0.5)',
          zIndex: 0,
        })
        .add({
          targets: rightElement,
          scale: 1,
          backgroundColor: color.item,
          boxShadow: '0 0px 0px rgba(0,0,0,0.5)',
          zIndex: 0,
        }, 0).finished;
    },
    async cleanUpSwapAnimation() {
      await this.$nextTick();

      anime.set('.num', { translateX: 0 });
    },
    async highlightPivot(pivot) {
      await this.$nextTick();

      const pivotElement = this.$refs[`lala_${pivot}`];

      await anime.timeline({
        easing: 'easeInOutCubic',
        duration: this.speed,
      })
        .add({
          targets: pivotElement,
          backgroundColor: color.button,
        }).finished;
    },
    async unhighlightPivot() {
      await this.$nextTick();

      await anime.timeline({
        easing: 'easeInOutCubic',
        duration: this.speed,
      })
        .add({
          targets: '.num',
          backgroundColor: color.item,
        }).finished;
    },
  },
};
</script>

<style scoped>
.num {
  background-color: #1982C4;
  box-shadow: 0 0px 0px rgba(0, 0, 0, 0.5);
  @apply self-center flex-grow overflow-clip overflow-hidden inline-block align-middle;
}
</style>
