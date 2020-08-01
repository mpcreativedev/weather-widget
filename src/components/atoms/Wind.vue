<template>
  <span class="wind-icon" :style="styles.icon">
    <span :style="styles.label">{{ getCardinal(rotation) }}</span>
  </span>
</template>

<script lang="ts">
import { fn } from '@/types'
import { getCardinal } from '@/hooks/use-utils'
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Wind extends Vue {
  @Prop(Number) rotation!: number

  public getCardinal: fn = getCardinal

  get styles (): any {
    return {
      icon: {
        '-webkit-transform': `rotate(${this.rotation}deg)`,
                'transform': `rotate(${this.rotation}deg)`,
      },
      label: {
        '-webkit-transform': `translate(-50%, -50%) rotate(${-this.rotation}deg)`,
                'transform': `translate(-50%, -50%) rotate(${-this.rotation}deg)`,
      }
    }
  }
}
</script>

<style lang="scss">
@import 'src/assets/scss/global.scss';

.wind-icon {
  @include size(46px);
  border: 2px solid $black;
  display: inline-block;
  position: relative;
  border-radius: 50%;
  margin: 0 10px;

  &::after {
    content: '';
    @include size(0);
    @include triangle('down', 6px, 8px, $black);
    @include position(absolute, 0 null null 50%);
    transform: translate(-50%, 0%);
    overflow: hidden;
    display: block;
  }

  span {
    @include position(absolute, 50% null null 50%);
    display: block;
    font: {
      weight: bold;
      size: 65%;
    }
  }
}
</style>