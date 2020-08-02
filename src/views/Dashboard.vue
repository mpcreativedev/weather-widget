<template>
  <section id="dashboard" :style="style">
    <error-alert v-if="errors" />
    <div class="widgets" v-if="fetched">
      <observation-widget />
      <forecast-widget />
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
import ErrorAlert from '@/components/organisms/Error.vue'

@Component({
  components: {
    ObservationWidget,
    ForecastWidget,
    ErrorAlert,
  }
})
export default class Dashboard extends Vue {
  @Getter('app/fetched') fetched!: boolean
  @Getter('app/errors') errors!: boolean
  @Getter('app/theme') theme!: ITheme
  @Action('app/fetch') fetch!: fn

  @Watch('fetched')
  public onFetched (): void {
    this.$nextTick().then(() => 
      this.resize())
  }

  @Watch('errors')
  public onError (): void {
    this.$nextTick().then(() => 
      this.resize())
  }

  get style (): any {
    return {
      'background': this.theme.background,
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
    this.fetch()
    //this.loop()
  }
}
</script>

<style lang="scss">
#dashboard {
  padding: 0;
  margin: 0;
}
</style>