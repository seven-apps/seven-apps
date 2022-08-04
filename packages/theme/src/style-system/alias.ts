import { SizesTypes } from '../foundation/sizes'

export type PaddingProps = {
  p?: SizesTypes | number
  ph?: SizesTypes | number
  pv?: SizesTypes | number
  pr?: SizesTypes | number
  pl?: SizesTypes | number
  pt?: SizesTypes | number
  pb?: SizesTypes | number
}

export const padding = {
  p: 'padding',
  pt: 'paddingTop',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  pr: 'paddingRight',
  ph: 'paddingHorizontal',
  pv: 'paddingVertical',
}

export type MarginProps = {
  m?: SizesTypes | number
  mh?: SizesTypes | number
  mv?: SizesTypes | number
  mr?: SizesTypes | number
  ml?: SizesTypes | number
  mt?: SizesTypes | number
  mb?: SizesTypes | number
}

export const margin = {
  m: 'margin',
  mt: 'marginTop',
  mb: 'marginBottom',
  ml: 'marginLeft',
  mr: 'marginRight',
  mh: 'marginHorizontal',
  mv: 'marginVertical',
}

export type BorderProps = {
  bw?: SizesTypes | number
  btw?: SizesTypes | number
  bbw?: SizesTypes | number
  blw?: SizesTypes | number
  brw?: SizesTypes | number
  br?: SizesTypes | number
}

export const border = {
  bw: 'borderWidth',
  btw: 'borderTopWidth',
  bbw: 'borderBottomWidth',
  blw: 'borderLeftWidth',
  brw: 'borderRightWidth',
  br: 'borderRadius',
}

export type SizeProps = {
  h?: number | string
  w?: number | string
  maxH?: number
  minH?: number
  maxW?: number
  minW?: number
}

export const layout = {
  h: 'height',
  w: 'width',
  minH: 'minHeight',
  maxH: 'maxHeight',
  minW: 'minWidth',
  maxW: 'maxWidth',
}

export const colors = {
  bg: 'backgroundColor',
}

export type ColorProps = {
  bg?: string
}

export const aliasProps = {
  ...padding,
  ...margin,
  ...layout,
  ...colors,
  ...border,
}
