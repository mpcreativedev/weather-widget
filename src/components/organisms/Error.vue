<template>
  <div class="error alert">
    <div class="alert">
      <span>Sorry, service temporarly unavailable.<br />You can try again later.</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ErrorWidget extends Vue {}
</script>

<style lang="scss">
@import 'src/assets/scss/global.scss';

.error {
  display: flex;
  flex-wrap: wrap;

  .alert {
    @include size(100%, auto);
    position: relative;
    border-radius: 6px;
    max-width: 400px;
    margin: 0 auto;
    padding: 15px;
    color: $white;
    background: {
      color: $offline;
    }
    font: {
      weight: 400;
    }
  }
}
</style>