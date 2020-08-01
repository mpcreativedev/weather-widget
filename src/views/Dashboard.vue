<template>
  <section id="dashboard">
    <h2 :style="style"><span>Dashboard</span></h2>
    <div class="widgets" v-if="fetched">
      <observation-widget :model="observation" />
      <forecast-widget :model="forecast" />
    </div>
  </section>
</template>

<script lang="ts">
import { tick } from '@/hooks/use-utils'
import { Getter, Action } from 'vuex-class'
import { Component, Vue } from 'vue-property-decorator'
import { IObservation, IForecast, ITheme, fn } from '@/types'
import ObservationWidget from '@/components/organisms/Observation.vue'
import ForecastWidget from '@/components/organisms/Forecast.vue'

@Component({
  components: {
    ObservationWidget,
    ForecastWidget,
  }
})
export default class Dashboard extends Vue {
  @Getter('app/observation') observation!: IObservation
  @Getter('app/forecast') forecast!: IForecast
  @Getter('app/fetched') fetched!: boolean
  @Getter('app/theme') theme!: ITheme
  @Action('app/fetch') fetch!: fn

  get style (): any {
    return {
      color: this.theme.secondary
    }
  }

  public created (): void {
    tick(1, this.fetch)
  }
}
</script>

<style lang="scss">
#dashboard {
  padding: 60px 0;

  h2 {
    margin: 0;
  }
}
</style>