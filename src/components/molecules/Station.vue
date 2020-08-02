<template>
  <div class="station-box">
    <div class="container">
      <div class="main row">
        <h3><span>{{ model.stationID }}</span></h3>
        <status-icon :status="model.qcStatus" />
      </div>
      <div class="data row">
        <span class="label">Forecast for  
          <span class="value">{{ model.neighborhood }}</span>, 
          <span class="value">{{ model.country }}</span>
        </span>
      </div>
      <div class="data row">
        <span class="label">
          Elev <span class="value">{{ metric.elev }}</span> m,
          <span class="value">{{ model.lat | toFix(2) }}</span> °N,
          <span class="value">{{ model.lon | toFix(2) }}</span> °E
        </span>
      </div>
      <div class="data row">
        <span class="label">Last update:
          <span class="value">{{ model.obsTimeLocal | timeDate }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Getter } from 'vuex-class'
import { IObservation, IMetric } from '@/types'
import { Component, Vue, Prop } from 'vue-property-decorator'
import StatusIcon from '@/components/atoms/Status.vue'

@Component({
  components: {
    StatusIcon,
  }
})
export default class StationBox extends Vue {
  @Getter('app/observation') model!: IObservation
  @Getter('app/metric') metric!: IMetric
}
</script>

<style lang="scss">
@import 'src/assets/scss/global.scss';

.widget {
  .station-box {
    flex-grow: 1;
    flex-basis: 100%;
    margin: 0 0 30px;
    padding: 0 0 30px;
    border-bottom: 1px solid $grey;

    h3 {
      margin: 0;
      font: {
        weight: 900;
        size: 18px;
      }
    }
  }
}
</style>