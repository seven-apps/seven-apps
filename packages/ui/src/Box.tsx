import React from 'react'
import { View } from 'react-native'

export const Box = ({ children, ...props }) => {
  const { theme } = useThemeStore()
  const style = useComponentStyle('Box', props)
  return (
    <View style={createStyle({ ...style, ...props }, theme)} {...props}>
      {children}
    </View>
  )
}
