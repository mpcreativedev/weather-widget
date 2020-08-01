<template>
  <div class="observation widget">
    <ul>
      <li><span></span><span>{{ model.neighborhood }}</span></li>
      <li><span>StationID:</span> <span>{{ model.stationID }}</span> <status-icon :status="model.qcStatus" /></li>
      <li><span>Date &amp; Time:</span> <span>{{ model.obsTimeLocal | timeDate }}</span></li>
      <li><span>Humidity: </span> <span>{{ model.humidity }}%</span></li>
      <li><span>Dew Point: </span> <span>{{ metric.dewpt }} °C</span></li>
      <li><span>Temperature:</span> <span :style="styles.temp">{{ metric.temp }} °C</span></li>
      <li><span>Feels Like:</span> <span>{{ metric.windChill }} °C</span></li>
      <li><span>Pressure:</span> <span>{{ metric.pressure }} hPa</span></li>
      <li><span>Wind &amp; Gust:</span> <span>{{ metric.windSpeed | toFix }} / {{ metric.windGust | toFix }} km/h</span></li>
      <li><span>Precip Rate:</span> <span>{{ metric.precipRate | toFix }} mm/hr</span></li>
      <li><span>Precip Total:</span> <span>{{ metric.precipTotal | toFix }} mm</span></li>
      <li>
        <span>Wind Dir:</span>
        <wind-icon :rotation="model.winddir" />
      </li>
      <li><span>Elev {{ metric.elev }}m, {{ model.lat | toFix(2) }} °N, {{ model.lon | toFix(2) }} °E</span></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { getTempColor } from '@/hooks/use-utils'
import { IObservation, IMetric } from '@/types'
import { Component, Vue, Prop } from 'vue-property-decorator'
import StatusIcon from '@/components/atoms/Status.vue'
import WindIcon from '@/components/atoms/Wind.vue'

@Component({
  components: {
    StatusIcon,
    WindIcon,
  },

  filters: {
    timeDate: (value: string): string => {
      const date = new Date(value)
      return date.toLocaleString()
    },

    toFix: (value: number, digits: number = 1): string => {
      return value.toFixed(digits)
    },
  }
})
export default class Observation extends Vue {
  @Prop(Object) model!: IObservation

  get metric (): IMetric {
    return this.model.metric
  }

  get styles (): any {
    return {
      temp: {
        'color': getTempColor(this.metric.temp),
      }
    }
  }
}
</script>

<style lang="scss">
@import 'src/assets/scss/global.scss';

.observation {
  ul {
    padding: 0;

    li {
      padding: 8px 0;
        
      span {
        vertical-align: middle;

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