import Vue from 'vue'

Vue.filter('timeDate', (value: string): string => {
  const date = new Date(value)
  return date.toLocaleString()
})

Vue.filter('date', (value: string): string => {
  const date = new Date(value)
  const day = ('0' + date.getDate()).slice(-2)
  const month = ('0' + (date.getMonth() + 1)).slice(-2)
  return `${day}/${month}`
})

Vue.filter('toFix', (value: number, digits: number = 1): string => {
  return value.toFixed(digits)
})