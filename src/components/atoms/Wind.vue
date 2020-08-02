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
export default class WindIcon extends Vue {
  @Prop(Number) rotation!: number

  public getCardinal: fn = getCardinal

  get styles (): any {
    return {
      icon: {
        '-webkit-transform': `rotate(${this.rotation}deg)`,
                'transform': `rotate(${this.rotation}deg)`,
      },
      label: {
        '-webkit-transform': `rotate(${-this.rotation}deg)`,
                'transform': `rotate(${-this.rotation}deg)`,
      }
    }
  }
}
</script>

<style lang="scss">
@import 'src/assets/scss/global.scss';

.wind-icon {
  @include size(110px);
  border: 3px solid $black;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 50%;
  display: flex;

  span {
    display: inline-block;
    font: {
      weight: 700;
      size: 24px;
    }
  }

  &::after {
    content: '';
    @include size(0);
    @include triangle('down', 8px, 20px, $black);
    @include position(absolute, 0 null null 50%);
    transform: translate(-50%, 0%);
    overflow: hidden;
    display: block;
  }
}
</style>