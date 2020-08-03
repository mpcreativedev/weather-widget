import Vue from 'vue'

Vue.filter('epochToDate', (value: number): string => {
  const date = new Date(value * 1000)
  return date.toLocaleString()
})

Vue.filter('localTodate', (value: string): any => {
  const date = new Date(value.replace('+0200', ''))
  const day = ('0' + date.getDate()).slice(-2)
  const month = ('0' + (date.getMonth() + 1)).slice(-2)
  return `${day}/${month}`
})

Vue.filter('toFix', (value: number, digits: number = 1): string => {
  return value.toFixed(digits)
})