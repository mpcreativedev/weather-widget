import { fn } from '@/types'
import { Cardinals, TempColors } from '@/constants'

export const getCardinal = (angle: number): string => {
  let cardinal = ''
  const slice = 360 / 16
  const offset = slice / 2
  const length = Cardinals.length
  const normalize = (angle: number) => angle + offset > 360 ? angle - 360 : angle
  for (let i = 0; i < length; ++i) {
    if (normalize(angle) >= i * slice - offset && normalize(angle) < (i + 1) * slice - offset)
      cardinal = Cardinals[i] }
  return cardinal
}

export const getTempColor = (value: number): string => {
  const slice = 40 / 4
  const temp = Math.min(Math.max(value, 0), 40)
  const length = TempColors.length
  let color = TempColors[length - 1]
  for (let i = 0; i < length; ++i) {
    if (temp >= i * slice && temp < (i + 1) * slice)
      color = TempColors[i] }
  return color
}

export const insertRule = (rule: string, style: any) => {
  const styles = document.styleSheets[0]
  if ('insertRule' in styles && 'MozBoxSizing' in styles)
    styles!.insertRule(`*::-moz-${rule} { background: ${style.background}; color: ${style.color} }`, 0)
  else if ('insertRule' in styles)
    styles!.insertRule(`::${rule} { background: ${style.background}; color: ${style.color} }`, 0)
}

export const tick = (delay: number, callback: fn) => {
  setInterval(() => 
    callback(), delay * 60 * 1000)
    callback()
}