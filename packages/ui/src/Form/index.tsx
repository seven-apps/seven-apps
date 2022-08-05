import React from 'react'
import {
  Control,
  UseFormHandleSubmit,
  FieldValues,
  useForm,
} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

type FormProps = {
  onSubmit: (data: any) => void
  children: JSX.Element[]
  validation?: yup.AnyObjectSchema
}

export const Form = ({ children, validation, onSubmit }: FormProps) => {
  const { handleSubmit, control } = useForm(
    validation ? { resolver: yupResolver(validation) } : {}
  )

  return (
    <>
      {React.Children.map(children, (child: React.ReactElement) => {
        const props = !!child.props?.submit
          ? {
              control,
              onPress: handleSubmit(onSubmit),
            }
          : { control }

        return React.cloneElement(child, props)
      })}
    </>
  )
}

type FormControlProps = {
  handleSubmit: any
  children: JSX.Element[]
  control: Control
}

export const FormControl = ({
  children,
  control,
  handleSubmit,
}: FormControlProps) => {
  return (
    <>
      {React.Children.map(children, (child: React.ReactElement) => {
        const props = !!child.props?.submit
          ? {
              control,
              onPress: handleSubmit,
            }
          : { control }

        return React.cloneElement(child, props)
      })}
    </>
  )
}
