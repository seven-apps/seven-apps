import React, { useState } from 'react'
import { TextInput } from 'react-native'
import pick from 'lodash.pick'
import { useInputStyle } from './hook'
import { Text } from '../Text'
import { Controller } from 'react-hook-form'

const InputComponent = ({
  value,
  defaultValue,
  onChange,
  errorColor,
  error,
  label,
  ...props
}) => {
  const [focus, setFocus] = useState(false)
  const { labelStyle, errorStyle, inputStyle } = useInputStyle(
    props,
    focus,
    !!error
  )

  const spacingLabel = pick(inputStyle, label ? ['marginTop'] : [])
  if (!!label) delete inputStyle.marginTop

  return (
    <>
      {label && <Text {...{ ...labelStyle, ...spacingLabel }}>{label}</Text>}
      <TextInput
        {...props}
        value={value}
        onChangeText={onChange}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={inputStyle}
      />
      {error && <Text {...errorStyle}>{error}</Text>}
    </>
  )
}

export const Input = ({ name, control, ...props }) => {
  if (!!control) {
    return (
      <Controller
        name={name}
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
