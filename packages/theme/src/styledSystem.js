import PropTypes from 'prop-types'

import { metrics } from './metrics'

const wp = metrics.wp
const hp = metrics.hp

const getColor = (colors, key) => {
  if (!key) return null

  if (key.includes('.')) {
    const splited = key.split('.')
    return colors[splited[0]][splited[1]] || '#fff'
  }

  return colors[key] || ((key.includes('rgb') || key.includes('#')) && key)
}

export const paddingProps = ({ p, ph, pv, pr, pl, pt, pb }) => `
    ${p ? `padding: ${hp(p)};` : ''}
    ${ph ? `padding-horizontal: ${wp(ph)};` : ''}
    ${pv ? `padding-vertical: ${hp(pv)};` : ''}
    ${pr ? `padding-right: ${wp(pr)};` : ''}
    ${pl ? `padding-left: ${wp(pl)};` : ''}
    ${pt ? `padding-top: ${hp(pt)};` : ''}
    ${pb ? `padding-bottom: ${hp(pb)};` : ''}
  `

export const paddingPropsTypes = {
  p: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ph: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  pv: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  pr: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  pl: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  pt: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  pb: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

export const marginProps = ({ m, mh, mv, mr, ml, mt, mb }) => `
    ${m ? `margin: ${hp(m)};` : ''}
    ${mh ? `margin-horizontal: ${wp(mh)};` : ''}
    ${mv ? `margin-vertical: ${hp(mv)};` : ''}
    ${mr ? `margin-right: ${wp(mr)};` : ''}
    ${ml ? `margin-left: ${wp(ml)};` : ''}
    ${mt ? `margin-top: ${hp(mt)};` : ''}
    ${mb ? `margin-bottom: ${hp(mb)};` : ''}
  `

export const marginPropsTypes = {
  m: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  mh: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  mv: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  mr: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ml: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  mt: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  mb: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

export const sizeProps = ({
  height,
  maxHeight,
  minHeight,
  width,
  maxWidth,
  minWidth,
  fontSize,
  fluid,
  overflow,
  position,
  zIndex,
  top,
  bottom,
  left,
  right,
}) => `
  ${height ? `height: ${hp(height)};` : ''}
  ${maxHeight ? `max-height: ${hp(maxHeight)};` : ''}
  ${minHeight ? `min-height: ${hp(minHeight)};` : ''}
  ${width ? `width: ${wp(width)};` : ''}
  ${maxWidth ? `max-width: ${wp(maxWidth)};` : ''}
  ${minWidth ? `min-width: ${wp(minWidth)};` : ''}
  ${fontSize ? `font-size: ${hp(fontSize)};` : ''}
  ${fluid ? (fluid === 'vertical' ? 'height: 100%;' : 'width: 100%;') : ''}
  ${overflow ? `overflow: ${overflow};` : ''}
  ${position ? `position: ${position};` : ''}
  ${zIndex ? `z-index: ${zIndex};` : ''}
  ${top ? `top: ${hp(top)};` : ''}
  ${bottom ? `bottom: ${hp(bottom)};` : ''}
  ${left ? `left: ${hp(left)};` : ''}
  ${right ? `right: ${hp(right)};` : ''}
  `

export const sizePropsTypes = {
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  minHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  minWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fontSize: PropTypes.number,
  fluid: PropTypes.oneOfType([
    PropTypes.oneOf(['vertical', 'horizontal']),
    PropTypes.bool,
  ]),
  overflow: PropTypes.string,
  position: PropTypes.string,
  zIndex: PropTypes.number,
  top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  bottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  right: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

export const colorProps = ({ color, bgColor, theme }) => `
  ${color ? `color: ${getColor(theme, color)};` : ''}
  ${bgColor ? `background-color: ${getColor(theme, bgColor)};` : ''}
  `

export const colorPropsTypes = {
  color: PropTypes.string,
  bgColor: PropTypes.string,
}

export const flexProps = ({
  flex,
  flexDir,
  flexGrow,
  flexWrap,
  justifyContent,
  alignItems,
  alignSelf,
}) => `
  ${flex ? `flex: ${flex};` : ''}
  ${flexDir ? `flex-direction: ${flexDir};` : ''}
  ${flexGrow ? `flex-grow: ${flexGrow};` : ''}
  ${flexWrap ? `flex-wrap: ${flexWrap};` : ''}
  ${justifyContent ? `justify-content: ${justifyContent};` : ''}
  ${alignItems ? `align-items: ${alignItems};` : ''}
  ${alignSelf ? `align-self: ${alignSelf};` : ''}
`

export const flexPropsTypes = {
  flex: PropTypes.number,
  flexDir: PropTypes.oneOf(['row', 'column', 'column-reverse', 'row-reverse']),
  flexGrow: PropTypes.number,
  flexWrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
  justifyContent: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
  ]),
  alignItems: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'stretch',
    'baseline',
  ]),
  alignSelf: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'stretch',
    'baseline',
  ]),
}

const fontFamilies = {
  semiBold: 'Montserrat-Semibold',
  bold: 'Montserrat-Bold',
  medium: 'Montserrat-Medium',
  regular: 'Montserrat-Regular',
}

export const fontProps = ({
  fontFamily = 'semiBold',
  underline,
  align,
  letterSpacing,
}) => `
  ${fontFamily && `font-family: ${fontFamilies[fontFamily]};`}
  ${underline ? `text-decoration-line: underline;` : ''}
  ${align ? `text-align: ${align};` : ''}
  ${letterSpacing ? `letter-spacing: ${wp(letterSpacing, true) * 0.03}px;` : ''}
`

export const borderProps = ({
  borderWidth,
  borderTop,
  borderBottom,
  borderLeft,
  borderRight,
  radius,
  topLeftRadius,
  topRightRadius,
  bottomRightRadius,
  bottomLeftRadius,
  borderColor,
  theme,
}) => `
  ${borderWidth ? `border-width: ${borderWidth}px;` : ''}
  ${borderTop ? `border-top-width: ${borderTop}px;` : ''}
  ${borderBottom ? `border-bottom-width: ${borderBottom}px;` : ''}
  ${borderLeft ? `border-left-width: ${borderLeft}px;` : ''}
  ${borderRight ? `border-right-width: ${borderRight}px;` : ''}
  ${radius ? `border-radius: ${radius}px;` : ''}
  ${topLeftRadius ? `border-top-left-radius: ${topLeftRadius}px;` : ''}
  ${topRightRadius ? `border-top-right-radius: ${topRightRadius}px;` : ''}
  ${
    bottomRightRadius
      ? `border-bottom-right-radius: ${bottomRightRadius}px;`
      : ''
  }
  ${bottomLeftRadius ? `border-bottom-left-radius: ${bottomLeftRadius}px;` : ''}
  ${borderColor ? `border-color: ${getColor(theme, borderColor)};` : ''}
`

export const borderPropsTypes = {
  borderWidth: PropTypes.number,
  borderTop: PropTypes.number,
  borderBottom: PropTypes.number,
  borderLeft: PropTypes.number,
  borderRight: PropTypes.number,
  radius: PropTypes.number,
  topLeftRadius: PropTypes.number,
  topRightRadius: PropTypes.number,
  bottomRightRadius: PropTypes.number,
  bottomLeftRadius: PropTypes.number,
  borderColor: PropTypes.string,
}
