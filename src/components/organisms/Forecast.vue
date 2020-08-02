<template>
  <div class="forecast widget">
    <div class="container">
      <div class="main row">
        <h3>5 days forecast for
          <span class="value">{{ observation.neighborhood }}</span>, 
          <span class="value">{{ observation.country }}</span>
        </h3>
      </div>
      <div class="table row">
        <div class="scroller">
          <table-box />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Getter } from 'vuex-class'
import { IObservation } from '@/types'
import { Component, Vue, Prop } from 'vue-property-decorator'
import TableBox from '@/components/molecules/Table.vue'

@Component({
  components: {
    TableBox,
  }
})
export default class ForecastWidget extends Vue {
  @Getter('app/observation') observation!: IObservation
}
</script>

<style lang="scss">
@import 'src/assets/scss/global.scss';

.forecast {
  margin: 40px 0 0;

  h3 {
    font: {
      weight: 900;
      size: 18px;
    }
  }

  .scroller {
    @include size(100%);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
}
</style>