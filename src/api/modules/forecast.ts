import { AxiosResponse } from 'axios'
import { IObservation } from '@/types'
import { forecastDailyRequest } from '@/api/request'

const {
  VUE_APP_API_KEY,
  VUE_APP_API_UNITS,
  VUE_APP_API_FORMAT,
  VUE_APP_API_LANGUAGE,
} = process.env

export default {
  fetch ({ lat, lon }: IObservation): Promise<AxiosResponse> {
    return forecastDailyRequest.get(`5day`, { params: {
      language: VUE_APP_API_LANGUAGE,
      format: VUE_APP_API_UNITS,
      apiKey: VUE_APP_API_KEY,
      units: VUE_APP_API_FORMAT,
      geocode: `${lat},${lon}`,
    } })
  },
}