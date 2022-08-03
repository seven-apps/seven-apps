import React from 'react'
import { View, ViewProps } from 'react-native'

import {
  useComponentStyle,
  SizeProps,
  MarginProps,
  PaddingProps,
  ColorTypes,
  FlexProps,
} from '@sevenapps/theme'

interface BoxInterface extends ViewProps {
  colorScheme?: string
  variant?: string
  center?: boolean
  row?: boolean
  borderColor?: ColorTypes | string
}

type BoxProps = BoxInterface &
  SizeProps &
  MarginProps &
  PaddingProps &
  FlexProps

export const Box = ({ children, row, center, ...props }: BoxProps) => {
  let [style] = useComponentStyle(props, 'Box')

  delete props.borderColor

  if (row) {
    style = {
      ...style,
      flexDirection: 'row',
    }
  }

  if (center) {
    style = {
      ...style,
      alignItems: 'center',
      justifyContent: 'center',
    }
  }

  return (
    <View style={style} {...props}>
      {children}
    </View>
  )
}
