import Vue from 'vue'

Vue.filter('timeDate', (value: string): string => {
  const date = new Date(value.replace(' ', 'T'))
  return date.toLocaleString()
})

Vue.filter('date', (value: string): any => {
  const date = new Date(value.replace('+0200', ''))
  const day = ('0' + date.getDate()).slice(-2)
  const month = ('0' + (date.getMonth() + 1)).slice(-2)
  return `${day}/${month}`
})

Vue.filter('toFix', (value: number, digits: number = 1): string => {
  return value.toFixed(digits)
})