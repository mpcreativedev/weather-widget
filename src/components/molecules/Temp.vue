<template>
  <div class="temp-box">
    <div class="container">
      <div class="icon row">
        <temp-icon :value="metric.temp" />
      </div>
      <div class="data row">
        <span class="label">
          Feels Like<br />
          <span class="value">{{ metric.windChill }}°</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Getter } from 'vuex-class'
import { IObservation, IMetric } from '@/types'
import { Component, Vue } from 'vue-property-decorator'
import TempIcon from '@/components/atoms/Temp.vue'

@Component({
  components: {
    TempIcon,
  }
})
export default class TempBox extends Vue {
  @Getter('app/observation') model!: IObservation
  @Getter('app/metric') metric!: IMetric
}
</script>

<style lang="scss">
.widget {
  .temp-box {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 20px 0 0;
    flex-basis: 50%;
    flex-grow: 1;
  }
}
</style>