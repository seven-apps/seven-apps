import React from 'react'
import { Control, UseFormHandleSubmit, FieldValues } from 'react-hook-form'

type FormProps = {
  control: Control
  handleSubmit: UseFormHandleSubmit<FieldValues>
  children: React.ReactElement
}

export const Form = ({ children, control, handleSubmit }: FormProps) => {
  return React.Children.map(children, (child: React.ReactElement) => {
    const props = child.props?.onSubmit
      ? {
          control,
          onPress: handleSubmit(child.props.onSubmit),
        }
      : { control }

    return React.cloneElement(child, props)
  })
}
