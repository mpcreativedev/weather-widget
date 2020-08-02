<template>
  <section id="dashboard" :style="style">
    <div class="widgets" v-if="fetched">
      <observation-widget />
      <!--forecast-widget /-->
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
  @Getter('app/fetched') fetched!: boolean
  @Getter('app/theme') theme!: ITheme
  @Action('app/fetch') fetch!: fn

  get style (): any {
    return {
      background: this.theme.background
    }
  }

  public created (): void {
    tick(.25, this.fetch)
  }
}
</script>

<style lang="scss">
#dashboard {
  padding: 0;
  margin: 0;
}
</style>