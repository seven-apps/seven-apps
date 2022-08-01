import React from 'react'
import {
  TouchableOpacity,
  TouchableOpacityProps,
  TextProps,
} from 'react-native'
import {
  useComponentStyle,
  useComponentConfig,
  FontTypes,
  ColorTypes,
  SizesTypes,
  PaddingProps,
  MarginProps,
  BorderProps,
} from '@sevenapps/theme'

import { Text } from '../Text'
import { Box } from '../Box'

import pick from 'lodash.pick'

type ButtonProps = {
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  leftIconSpacing?: SizesTypes | number
  rightIconSpacing?: SizesTypes | number
} & TouchableOpacityProps &
  MarginProps &
  BorderProps &
  PaddingProps

export const Button = ({
  children,
  activeOpacity,
  onPress,
  leftIcon,
  rightIcon,
  leftIconSpacing = 0,
  rightIconSpacing = 0,
  ...props
}: ButtonProps) => {
  const config = useComponentConfig('Button')
  const style = useComponentStyle(props, 'Button')

  const styleFont = pick(style, [
    'fontSize',
    'color',
    'fontFamily',
    'fontWeight',
  ])

  return (
    <TouchableOpacity {...config} style={style} onPress={onPress}>
      <Box row>
        {leftIcon && <Box mr={leftIconSpacing || 'md'}>{leftIcon}</Box>}
        <Text {...styleFont}>{children}</Text>
        {rightIcon && <Box ml={rightIconSpacing || 'md'}>{rightIcon}</Box>}
      </Box>
    </TouchableOpacity>
  )
}
