import { Dimensions, PixelRatio } from 'react-native'

const { width, height } = Dimensions.get('window')

const baseWidth = 390
const baseHeight = 844

const scaleWidth = width / baseWidth
const scaleHeight = height / baseHeight
const scale = Math.min(scaleWidth, scaleHeight)

const wp = (width: string | number, onlyNumber: boolean = false) => {
  if (typeof width !== 'number') return width

  const result = Math.ceil(width * 4 * scale)

  return onlyNumber ? result : `${result}px`
}

const hp = (height: string | number, onlyNumber: boolean = false) => {
  if (typeof height !== 'number') return height

  const result = Math.ceil(height * 8.5 * scale)
  return onlyNumber ? result : `${result}px`
}

const figmaWidth = 390

const px = (valuePx: number) => {
  const widthPercent = (valuePx / figmaWidth) * 100
  const result = PixelRatio.roundToNearestPixel(
    (width * parseFloat(String(widthPercent))) / 100
  )
  return result
}

export const metrics = {
  wp,
  hp,
  px,
}

export default px
