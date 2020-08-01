<template>
  <main id="app">
    <router-view/>
  </main>
</template>

<script lang="ts">
import { fn } from '@/types'
import { Getter, Action } from 'vuex-class'
import { Component, Vue, Watch } from 'vue-property-decorator'

@Component
export default class App extends Vue {
  @Action('app/setTheme') setTheme!: fn

  @Watch('$route', { immediate: true })
  public async onRouteUpdate (): Promise<void> {
    const { query: theme } = this.$route
    this.setTheme(theme)
  }
}
</script>

<style lang="scss">
#app {
  text-align: center;
}
</style>