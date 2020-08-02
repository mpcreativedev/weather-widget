<template>
  <div class="wind-box">
    <div class="container">
      <div class="icon row">
        <wind-icon :rotation="model.winddir" />
      </div>
      <div class="data row">
        <span class="label">
          Wind &amp; Gust<br />
          <span class="value">{{ metric.windSpeed | toFix }} / {{ metric.windGust | toFix }} km/h</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Getter } from 'vuex-class'
import { IObservation, IMetric } from '@/types'
import { Component, Vue } from 'vue-property-decorator'
import WindIcon from '@/components/atoms/Wind.vue'

@Component({
  components: {
    WindIcon,
  }
})
export default class WindBox extends Vue {
  @Getter('app/observation') model!: IObservation
  @Getter('app/metric') metric!: IMetric
}
</script>

<style lang="scss">
.widget {
  .wind-box {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 0 0 20px;
    flex-basis: 50%;
    flex-grow: 1;
  }
}
</style>