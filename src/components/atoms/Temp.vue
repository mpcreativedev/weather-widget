<template>
  <div class="temp-icon" :style="style">
    <span>{{ value }}°<span class="unit">C</span></span>
  </div>
</template>

<script lang="ts">
import { getTempColor } from '@/hooks/use-utils'
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class TempIcon extends Vue {
  @Prop(Number) value!: number

  get style (): any {
    return {
      'border-color': getTempColor(this.value), 
      'color': getTempColor(this.value),
    }
  }
}
</script>

<style lang="scss">
@import 'src/assets/scss/global.scss';

.temp-icon {
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

    &.unit {
      font: {
        size: 16px;
      }
    }
  }
}
</style>