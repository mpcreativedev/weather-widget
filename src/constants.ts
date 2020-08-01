
export const Cardinals: string[] = [
  'N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'
]

export const TempColors: string[] = [
  '#42adff', 
  '#54c787', 
  '#f9ad29', 
  '#f24040'
]

export const StationStatus: any = {
  ONLINE: 1,
  WARNING: 0,
  OFFLINE: -1,
}

export const Statics: any = {
  WEATHER: `${process.env.VUE_APP_API_STATIC_ASSETS}/i/c/v4`,
  MOON: `${process.env.VUE_APP_API_STATIC_ASSETS}/i/moon`,
}