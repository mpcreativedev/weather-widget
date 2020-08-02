<template>
  <div class="observation widget" :style="style">
    <station-box />
    <temp-box />
    <wind-box />
    <info-box />
  </div>
</template>

<script lang="ts">
import { Getter } from 'vuex-class'
import { getTempColor } from '@/hooks/use-utils'
import { IObservation, IMetric, ITheme } from '@/types'
import { Component, Vue, Prop } from 'vue-property-decorator'
import StationBox from '@/components/molecules/Station.vue'
import TempBox from '@/components/molecules/Temp.vue'
import WindBox from '@/components/molecules/Wind.vue'
import InfoBox from '@/components/molecules/Info.vue'


@Component({
  components: {
    StationBox,
    TempBox,
    WindBox,
    InfoBox,
  }
})
export default class ObservationWidget extends Vue {
  @Getter('app/observation') model!: IObservation
  @Getter('app/metric') metric!: IMetric
  @Getter('app/theme') theme!: ITheme

  get style (): any {
    return {
      color: this.theme.text
    }
  }
}
</script>

<style lang="scss">
@import 'src/assets/scss/global.scss';

.observation {
  display: flex;
  flex-wrap: wrap;
}
</style>