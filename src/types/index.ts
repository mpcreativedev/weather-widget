export type fn = (...args: any[]) => any

export interface IObservation {
  country: string
  epoch: number
  humidity: number
  lat: number
  lon: number
  metric: IMetric
  neighborhood: string
  obsTimeLocal: string
  obsTimeUtc: string
  qcStatus: number
  softwareType: string
  stationID: string
  winddir: number
}

export interface IMetric {
  dewpt: number
  elev: number
  heatIndex: number
  precipRate: number
  precipTotal: number
  pressure: number
  temp: number
  windChill: number
  windGust: number
  windSpeed: number
}

export interface ITheme {
  background: string
  secondary: string
  text: string
}