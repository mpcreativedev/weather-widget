<template>
  <section id="dashboard" v-if="!fetching">
    <h2 :style="style"><span>Dashboard</span></h2>
    <widget :model="observation" />
  </section>
</template>

<script lang="ts">
import { IObservation, ITheme, fn } from '@/types'
import { Component, Vue } from 'vue-property-decorator'
import { Getter, Action } from 'vuex-class'
import Widget from '@/components/Widget.vue'

@Component({
  components: {
    Widget,
  }
})
export default class Dashboard extends Vue {
  @Getter('app/observation') observation!: IObservation
  @Getter('app/fetching') fetching!: boolean
  @Getter('app/theme') theme!: ITheme
  @Action('app/fetch') fetch!: fn

  get style (): any {
    return {
      color: this.theme.secondary
    }
  }

  public created (): void {
    this.fetch()
  }
}
</script>

<style lang="scss">
#dashboard {
}
</style>