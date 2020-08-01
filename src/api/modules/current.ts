import { AxiosResponse } from 'axios'
import { pwsObservationsRequest } from '@/api/request'

const {
  VUE_APP_API_KEY,
  VUE_APP_API_UNITS,
  VUE_APP_API_FORMAT,
  VUE_APP_API_STATIONID,
} = process.env

export default {
  fetch (): Promise<AxiosResponse> {
    return pwsObservationsRequest.get(`current`, { params: {
      stationId: VUE_APP_API_STATIONID,
      format: VUE_APP_API_FORMAT,
      apiKey: VUE_APP_API_KEY,
      units: VUE_APP_API_UNITS,
    } })
  },
}