<template>
  <div class="forecast widget">
    <table>
      <tr>
        <th><span>Day</span></th>
        <th><span>Conditions</span></th>
        <th><span>Temp.</span></th>
        <th><span>Min. Max.</span></th>
        <th><span>Humidity</span></th>
        <th><span>Precip.</span></th>
        <th><span>Wind</span></th>
        <th><span>Moon Phase</span></th>
      </tr>
      <tr v-for="(day, index) of model.dayOfWeek" :key="index">
        <td><span>{{ daypart.daypartName[getIndex(index, 'daypartName')] }} {{ model.validTimeLocal[index] | date }}</span></td>
        <td class="weather">
          <span class="flex">
            <img class="icon" :src="`${statics.weather}/${daypart.iconCode[getIndex(index, 'iconCode')]}.svg`" alt="">
            <span>{{ daypart.wxPhraseLong[getIndex(index, 'wxPhraseLong')] }}</span>
          </span>
        </td>
        <td><span>{{ daypart.temperature[getIndex(index, 'temperature')] }} °C</span></td>
        <td class="temp">
          <span class="min" v-if="model.temperatureMin[index]">{{ model.temperatureMin[index] }} °C </span> | 
          <span class="max" v-if="model.temperatureMax[index]">{{ model.temperatureMax[index] }} °C</span>
        </td>
        <td><span>{{ daypart.relativeHumidity[getIndex(index, 'relativeHumidity')] }}%</span></td>
        <td><span>{{ daypart.precipChance[getIndex(index, 'precipChance')] }}%</span></td>
        <td>
          <span>{{ daypart.windSpeed[getIndex(index, 'windSpeed')] }} km/h </span>
          <span>{{ daypart.windDirectionCardinal[getIndex(index, 'windDirectionCardinal')] }}</span>
        </td>
        <td class="moon">
          <span class="flex">
            <img class="icon" :src="`${statics.moon}/n-${model.moonPhaseDay[index]}.svg`" alt=""> 
            <span>{{ model.moonPhase[index] }}</span>
          </span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Statics } from '@/constants'
import { IForecast, IDaypart } from '@/types'
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  filters: {
    date: (value: string): string => {
      const date = new Date(value)
      const day = ('0' + date.getDate()).slice(-2)
      const month = ('0' + (date.getMonth() + 1)).slice(-2)
      return `${day}/${month}`
    },
  }
})
export default class Forecast extends Vue {
  @Prop(Object) model!: IForecast

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

.forecast {
  table {
    margin: 0;
    
    td {
      &.temp {
        .min {
          color: $temp-min;
        }

        .max {
          color: $temp-max;
        }
      }

      &.weather,
      &.moon {
        .icon {
          margin: 0 10px;
        }
      }

      &.weather {
        .icon {
          max-width: 34px;
        }
      }

      &.moon {
        .icon {
          max-width: 22px;
        }
      }

      .flex {
        display: flex;
        align-items: center;
      }

      img, span {
        vertical-align: middle; 
      }
    }
  }
}
</style>