<template>
  <div class="h-full">
    <div class="h-full flex flex-row flex-shrink justify-evenly gap-px items-center content-center">
      <div v-for="num in nums" :key="num" :id="`lala_${num}`" :ref="`lala_${num}`" class="num" :style="{ height: ((num / nums.length) * max_line_height  + 23) + 'px' }">{{ num }}</div>
    </div>
  </div>
</template>

<script>
import anime from 'animejs';

export default {
  name: 'Playground',
  data() {
    return {
      max_line_height: 400,
      nums: [1, 2, 3],
      speed: 1000,
    };
  },
  async mounted() {
    await this.animateSwap(3, 1);

    this.nums[0] = 3;
    this.nums[2] = 1;

    this.cleanUpSwapAnimation();
  },
  methods: {
    async animateSwap(numA, numB) {
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

      const tl = anime.timeline({
        easing: 'easeInOutCubic',
        duration: this.speed,
      });

      tl
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
        })
        .add({
          targets: leftElement,
          translateX,
        })
        .add({
          targets: rightElement,
          translateX: -translateX,
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
        });

      return tl.finished;
    },
    cleanUpSwapAnimation() {
      anime.set('.num', { translateX: 0 });
    },
  },
};
</script>

<style scoped>
.num {
  background-color: #118AB2;
  box-shadow: 0 0px 0px rgba(0,0,0,0.5);
  @apply self-center flex-grow overflow-clip overflow-hidden inline-block align-middle
}

</style>
