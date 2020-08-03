<template>
  <table>
    <thead>
      <tr>
        <th><span>Day</span></th>
        <th class="weather"><span>Conditions</span></th>
        <th class="minmax"><span>Max. Min.</span></th>
        <th class="humidity"><span>Humidity</span></th>
        <th><span>Precip.</span></th>
        <th><span>Wind</span></th>
        <th class="moon"><span>Moon</span></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(day, index) of model.dayOfWeek" :key="index">
        <td>
          <span>{{ daypart.daypartName[getIndex(index, 'daypartName')] }} {{ model.validTimeLocal[index] | localTodate }}</span>
        </td>
        <td class="weather">
          <img class="icon" alt=""
            :src="`${statics.weather}/${daypart.iconCode[getIndex(index, 'iconCode')]}.svg`" 
            :title="daypart.wxPhraseLong[getIndex(index, 'wxPhraseLong')]">
        </td>
        <td class="minmax">
          <span v-if="model.temperatureMax[index]"><span class="max">{{ model.temperatureMax[index] }}°</span> | </span>
          <span v-else>-- | </span>
          <span v-if="model.temperatureMin[index]"><span class="min">{{ model.temperatureMin[index] }}°</span>C</span>
        </td>
        <td class="humidity">
          <span>{{ daypart.relativeHumidity[getIndex(index, 'relativeHumidity')] }}%</span>
        </td>
        <td>
          <span>{{ daypart.precipChance[getIndex(index, 'precipChance')] }}%</span>
        </td>
        <td class="wind">
          <span>{{ daypart.windSpeed[getIndex(index, 'windSpeed')] }} km/h </span>
          <span>{{ daypart.windDirectionCardinal[getIndex(index, 'windDirectionCardinal')] }}</span>
        </td>
        <td class="moon">
          <img class="icon" alt=""
            :src="`${statics.moon}/n-${model.moonPhaseDay[index]}.svg`"
            :title="model.moonPhase[index]"> 
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { Getter } from 'vuex-class'
import { Statics } from '@/constants'
import { IForecast, IDaypart } from '@/types'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class TableBox extends Vue {
  @Getter('app/forecast') model!: IForecast

  get daypart (): IDaypart {
    return this.model.daypart[0]
  }

  get statics (): any {
    return {
      weather: Statics.WEATHER,
      moon: Statics.MOON,
    }
  } 

  public getIndex (index: number, prop: string): number {
    return (<any>this.daypart)[prop][index * 2] ? index * 2 : index + 1
  }
}
</script>

<style lang="scss">
@import 'src/assets/scss/global.scss';

.widget {
  table {
    width: 640px;
    margin: 0 auto;
    table-layout: auto;
    font: {
      size: 14px;
    }

    thead {
      background: $light;
    }

    tbody {
      tr {
        &:nth-of-type(2n) {
          background: $light;
        }
      }
    }

    th,
    td {
      text-align: left;
      padding: 10px 5px;
      vertical-align: middle;

      &.weather,
      &.humidity,
      &.minmax,
      &.moon {
        text-align: center;
      }

      &.weather {
        .icon {
          max-width: 34px;
        }
      }

      &.minmax {
        .min {
          color: $temp-min;
        }

        .max {
          color: $temp-max;
        }
      }

      &.moon {
        .icon {
          max-width: 22px;
        }
      }
    }
  }
}
</style>