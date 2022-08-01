import React from 'react'
import { View } from 'react-native'

import { useComponentStyle } from '@sevenapps/theme'

export const Box = ({ children, row, ...props }) => {
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
