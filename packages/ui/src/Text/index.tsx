import React from 'react'
import { Text as TextRN, TextProps } from 'react-native'
import {
  useComponentStyle,
  FontTypes,
  ColorTypes,
  PaddingProps,
  MarginProps,
} from '@sevenapps/theme'

type TextCustomProps = {
  colorScheme?: boolean
  variant?: string
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | string
  fontSize?: FontTypes | number
  color?: ColorTypes | string
} & TextProps &
  PaddingProps &
  MarginProps

export const Text = ({ children, ...props }: TextCustomProps) => {
  const [style] = useComponentStyle(props, 'Text')

  return (
    <TextRN style={style} {...props}>
      {children}
    </TextRN>
  )
}
