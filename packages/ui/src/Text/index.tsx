import React from 'react'
import { Text as TextRN, TextInputProps } from 'react-native'
import {
  useComponentStyle,
  FontTypes,
  ColorTypes,
  PaddingProps,
  MarginProps,
} from '@sevenapps/theme'

type TextProps = {
  colorScheme?: boolean
  variant?: boolean
  fontSize?: FontTypes | number
  color?: ColorTypes | string
} & TextInputProps &
  PaddingProps &
  MarginProps

export const Text = ({ children, ...props }: TextProps) => {
  const style = useComponentStyle(props, 'Text')

  return (
    <TextRN style={style} {...props}>
      {children}
    </TextRN>
  )
}
