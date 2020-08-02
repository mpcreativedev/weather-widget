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
import { passiveSupport } from '@/hooks/use-polyfills'
import { Component, Vue, Watch } from 'vue-property-decorator'
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

  @Watch('fetched')
  public onDataFetched (): void {
    this.$nextTick().then(() => 
      this.resize())
  }

  get style (): any {
    return {
      background: this.theme.background
    }
  }

  public resize (): void {
    const event = 'setIframeHeight'
    const value = this.$el.scrollHeight
    window.parent.postMessage({ event, value }, '*')
  }

  public addListeners (): void {
    const passive = passiveSupport() ? { passive: false } : false
    window.addEventListener('resize', this.resize.bind(this), passive)
  }

  public loop (): void {
    tick(.25, this.fetch)
  }

  public mounted (): void {
    this.addListeners()
    this.loop()
  }
}
</script>

<style lang="scss">
#dashboard {
  padding: 0;
  margin: 0;
}
</style>