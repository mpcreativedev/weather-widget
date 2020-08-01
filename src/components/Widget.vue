<template>
  <div class="widget">
    <ul>
      <li><span>place:</span> <span>{{ model.neighborhood }}</span></li>
      <li><span>stationID:</span> <span>{{ model.stationID }}</span>
      <li><span>date:</span> <span>{{ model.obsTimeLocal | date }}</span></li>
      <li><span>time:</span> <span>{{ model.obsTimeLocal | time }}</span></li>
      <li><span>humidity: </span> <span>{{ model.humidity }}</span></li>
      <li><span>temp:</span> <span>{{ metric.temp }}</span></li>
      <li><span>pressure:</span> <span>{{ metric.pressure }}</span></li>
      <li><span>precipRate:</span> <span>{{ metric.precipRate }}</span></li>
      <li><span>heatIndex:</span> <span>{{ metric.heatIndex }}</span></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { IObservation, IMetric } from '@/types'

@Component({
  filters: {
    date: (value: string) => {
      const date = new Date(value)
      return date.toLocaleDateString()
    },

    time: (value: string) => {
      const date = new Date(value)
      return date.toLocaleTimeString()
    }
  }
})
export default class Widget extends Vue {
  @Prop(Object) model!: IObservation

  get metric (): IMetric {
    return this.model.metric
  }
}
</script>

<style lang="scss">
.widget {
  ul {
    padding: 0;

    li {
      margin: 10px 0;
      span {
        &:nth-child(2) {
          font: {
            weight: bold;
          }
        }
      }
    }
  }
}
</style>