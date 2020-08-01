import axios from 'axios'

export const pwsObservationsRequest = axios.create({
  baseURL: process.env.VUE_APP_API_PWS_OBSERVATIONS
})

export const forecastDailyRequest = axios.create({
  baseURL: process.env.VUE_APP_API_FORECAST_DAILY
})