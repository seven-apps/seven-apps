import React from 'react'
import { Text as TextRN, TextInputProps } from 'react-native'
import { useComponentStyle, FontTypes, ColorTypes } from '@sevenapps/theme'
interface TextInterface extends TextInputProps {
  fontSize: FontTypes | number
  color: ColorTypes | string
}

export const Text = ({ children, ...props }: TextInterface & FontTypes) => {
  const style = useComponentStyle(props, 'Text')

  return (
    <TextRN style={style} {...props}>
      {children}
    </TextRN>
  )
}
