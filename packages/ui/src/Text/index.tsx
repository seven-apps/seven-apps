import React from 'react'
import { Text as TextRN } from 'react-native'
import { useComponentStyle } from '@sevenapps/theme'

export const Text = ({ children, ...props }) => {
  const style = useComponentStyle(props, 'Text')

  return (
    <TextRN style={style} {...props}>
      {children}
    </TextRN>
  )
}
