import React, { useState } from 'react'
import { TextInput, TextInputProps, TextProps } from 'react-native'
import { useInputStyle } from './hook'
import { Text } from '../Text'
import { Controller, Control } from 'react-hook-form'
import { Masks, useMaskedInputProps } from 'react-native-mask-input'

import {
  PaddingProps,
  MarginProps,
  SizeProps,
  BorderProps,
} from '@sevenapps/theme'

type AnyObject = {
  [key: string]: any
}

type InputComponentProps = {
  label?: string
  error?: string
  mask?: keyof typeof Masks
} & TextInputProps &
  TextProps &
  PaddingProps &
  MarginProps &
  SizeProps &
  BorderProps &
  AnyObject

const InputComponent = ({
  value,
  defaultValue,
  onChange,
  errorColor,
  error,
  label,
  mask,
  ...props
}: InputComponentProps) => {
  const [focus, setFocus] = useState(false)
  const { labelStyle, errorStyle, inputStyle } = useInputStyle(
    props,
    focus,
    !!error
  )
  const maskedInputProps = useMaskedInputProps({
    value: value || '',
    onChangeText: onChange,
    ...(mask
      ? {
          mask: Masks[mask],
        }
      : {}),
  })

  const spacingLabel = pick(inputStyle, label ? ['marginTop'] : [])
  if (!!label) delete inputStyle.marginTop

  return (
    <>
      {label && <Text {...{ ...labelStyle, ...spacingLabel }}>{label}</Text>}
      <TextInput
        {...props}
        {...maskedInputProps}
        placeholder={props.placeholder}
        placeholderTextColor={
          (error && errorStyle.color) || props.placeholderTextColor
        }
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={inputStyle}
      />
      {error && <Text {...errorStyle}>{error}</Text>}
    </>
  )
}

type InputProps = {
  name?: string
  control?: Control
} & InputComponentProps

export const InputT = ({ name, control, ...props }: InputProps) => {
  if (!!control || !!name) {
    return (
      <Controller
        name={name || ''}
        control={control}
        defaultValue={props.defaultValue}
        render={({ field, fieldState }) => (
          <InputComponent
            {...props}
            value={field.value}
            onChange={field.onChange}
            error={fieldState.error?.message}
          />
        )}
      />
    )
  }

  return <InputComponent {...props} />
}
