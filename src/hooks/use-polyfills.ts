export const passiveSupport = (): any | boolean => {
  let support = false
  try {
    let opts = Object.defineProperty({}, 'passive', { get: () => support = true })
    window.addEventListener('test', () => {}, opts)
  } catch (e) { console.log(e) }
  return support
}