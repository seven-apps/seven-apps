import React from 'react'
import { View, ViewProps } from 'react-native'

import {
  useComponentStyle,
  SizeProps,
  MarginProps,
  PaddingProps,
  ColorTypes,
} from '@sevenapps/theme'

interface BoxInterface extends ViewProps {
  row?: boolean
  borderColor?: ColorTypes | string
}

type BoxProps = BoxInterface & SizeProps & MarginProps & PaddingProps

export const Box = ({ children, row, ...props }: BoxProps) => {
  let style = useComponentStyle(props, 'Box')

  delete props.borderColor

  if (row) {
    style = {
      ...style,
      flexDirection: 'row',
    }
  }

  return (
    <View style={style} {...props}>
      {children}
    </View>
  )
}
