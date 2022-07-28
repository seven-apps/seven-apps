import { Dimensions, PixelRatio } from 'react-native'

const { width, height } = Dimensions.get('window')

const baseWidth = 375
const baseHeight = 667

const scaleWidth = width / baseWidth
const scaleHeight = height / baseHeight
const scale = Math.min(scaleWidth, scaleHeight)

const wp = (width, onlyNumber = false) => {
  if (typeof width !== 'number') return width

  const result = Math.ceil(width * 4 * scale)

  return onlyNumber ? result : `${result}px`
}

const hp = (height, onlyNumber = false) => {
  if (typeof height !== 'number') return height

  const result = Math.ceil(height * 8.5 * scale)
  return onlyNumber ? result : `${result}px`
}

const figmaWidth = 375

const px = (valuePx, onlyNumber) => {
  const widthPercent = (valuePx / figmaWidth) * 100
  const result = PixelRatio.roundToNearestPixel(
    (width * parseFloat(widthPercent)) / 100
  )
  return onlyNumber ? result : `${result}px`
}

export const metrics = {
  wp,
  hp,
  px,
}
