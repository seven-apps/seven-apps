import React from 'react'
import {
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
} from 'react-native'
import {
  useComponentStyle,
  useComponentConfig,
  SizesTypes,
  PaddingProps,
  MarginProps,
  BorderProps,
  SizeProps,
} from '@sevenapps/theme'

import { Text } from '../Text'
import { Box } from '../Box'

import pick from 'lodash.pick'

type ButtonProps = {
  submit?: boolean // pode crescer e virar mais props com um type
  loading?: boolean
  loadingColor?: string
  colorScheme?: string
  variant?: string
  center?: boolean
  column?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  leftIconSpacing?: SizesTypes | number
  rightIconSpacing?: SizesTypes | number
} & TouchableOpacityProps &
  MarginProps &
  BorderProps &
  PaddingProps &
  SizeProps

export const Button = ({
  loading,
  loadingColor,
  children,
  activeOpacity,
  onPress,
  leftIcon,
  rightIcon,
  center,
  column,
  leftIconSpacing = 0,
  rightIconSpacing = 0,
  ...props
}: ButtonProps) => {
  const config = useComponentConfig('Button')
  let [style] = useComponentStyle(props, 'Button')

  const styleFont = pick(style, [
    'fontSize',
    'color',
    'fontFamily',
    'fontWeight',
  ])

  if (center || config?.center) {
    style = {
      ...style,
      alignItems: 'center',
      justifyContent: 'center',
    }
  }

  return (
    <TouchableOpacity {...config} style={style} onPress={onPress}>
      {loading ? (
        <ActivityIndicator color={loadingColor || 'white'} />
      ) : (
        <Box row={!column} alignItems="center">
          {leftIcon && <Box mr={leftIconSpacing || 'md'}>{leftIcon}</Box>}

          {typeof children === 'string' ? (
            <Text {...styleFont}>{children}</Text>
          ) : (
            children
          )}

          {rightIcon && <Box ml={rightIconSpacing || 'md'}>{rightIcon}</Box>}
        </Box>
      )}
    </TouchableOpacity>
  )
}
