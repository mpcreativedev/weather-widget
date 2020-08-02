<template>
  <div class="info-box">
    <div class="container">
      <div class="row">
        <div class="col">
          <span class="label">
            Dew Point<br />
            <span class="value">{{ metric.dewpt }}</span> °C
          </span>
          <span class="label">
            Humidity<br />
            <span class="value">{{ model.humidity }}</span> %
          </span>
        </div>
        <div class="col">
          <span class="label">
            Precip Rate<br />
            <span class="value">{{ metric.precipRate | toFix }}</span> mm/hr
          </span>
          <span class="label">
            Precip Tot<br />
            <span class="value">{{ metric.precipTotal | toFix }}</span> mm
          </span>
        </div>
        <div class="col">
          <span class="label">
            Pressure<br />
            <span class="value">{{ metric.pressure }}</span> hPa
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Getter } from 'vuex-class'
import { IObservation, IMetric } from '@/types'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class InfosBox extends Vue {
  @Getter('app/observation') model!: IObservation
  @Getter('app/metric') metric!: IMetric
}
</script>

<style lang="scss">
@import 'src/assets/scss/global.scss';

.widget {
  .info-box {
    flex-grow: 1;
    flex-basis: 100%;
    padding: 15px 5px;
    margin: 50px 0 0;
    border-bottom: 1px solid $grey;
    border-top: 1px solid $grey;

    .container {
      max-width: 400px;
      margin: 0 auto;

      .row {
        justify-content: space-between;

        .col {
          text-align: left;

          .label {
            margin: 15px 0;
          }
        }
      }
    }
  }
}
</style>