import React from 'react'
import { TouchableOpacity } from 'react-native'
import {
  useComponentStyle,
  useComponentConfig,
  FontTypes,
  ColorTypes,
} from '@sevenapps/theme'

import { Text } from '../Text'
import { Box } from '../Box'

import pick from 'lodash.pick'

export const Button = ({
  children,
  activeOpacity,
  onPress,
  leftIcon,
  rightIcon,
  leftIconSpacing,
  rightIconSpacing,
  ...props
}) => {
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
