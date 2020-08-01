import { Cardinals, TempColors } from '@/constants'

export const getCardinal = (value: number): string => {
  const slice = 360 / 16
  const angle = value + slice / 2
  const length = Cardinals.length
  let cardinal = Cardinals[length - 1]
  for (let i = 0; i < length; ++i) {
    if (angle >= i * slice && angle < (i + 1) * slice)
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