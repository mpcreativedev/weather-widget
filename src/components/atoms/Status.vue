<template>
  <span class="status-icon" :class="className" title="Quality control status">
  </span>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { StationStatus } from '@/constants'

@Component
export default class StatusIcon extends Vue {
  @Prop(Number) status!: number

  get className (): string {
    const { ONLINE, OFFLINE } = StationStatus
    return this.status == ONLINE 
      ? 'online' : this.status == OFFLINE  
      ? 'offline' : 'warning'
  }
}
</script>

<style lang="scss">
@import 'src/assets/scss/global.scss';

.status-icon {
  @include size(12px);
  border-radius: 50%;
  display: inline-block;
  margin: 0 5px;

  &.online {
    background-color: $online;
  }

  &.offline {
    background-color: $offline;
  }

  &.warning {
    background-color: $warning;
  }
}
</style>