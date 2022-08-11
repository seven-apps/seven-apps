import React from 'react'
import { TouchableOpacity, ScrollView } from 'react-native'
import { useComponentStyle, isObject } from '@sevenapps/theme'
import { modal } from '../Modal'
import { Text } from '../Text'
import { Control, Controller } from 'react-hook-form'

type DataProps = {
  id: string | number
  [key: string]: any
}

type SelectComponentProps = {
  data: string[] | DataProps[]
  error?: string
  label?: string
  value?: string | DataProps
  children?: JSX.Element
  onSelect?: (params: string[] | DataProps[] | string | DataProps) => void
  renderItem: ({
    index,
    selected,
    item,
  }: {
    index: number
    selected: boolean
    item: any
  }) => JSX.Element
  multiselect?: boolean
}

const selectComponent = ({
  data,
  error,
  label,
  value,
  children,
  onSelect,
  renderItem,
  multiselect,
  ...props
}: SelectComponentProps) => {
  const { othersStyles } = useComponentStyle(props, 'Select', ['error'])

  const handleSelect = (item: DataProps | string) => {
    if (multiselect && isObject(item) && typeof item !== 'string') {
      if (!Array.isArray(value)) {
        onSelect?.([item])
        return
      }

      const selected = value?.find((v: any) => v.id === item.id)

      onSelect?.(
        selected
          ? value?.filter((v: any) => v.id !== item.id)
          : [...(value || []), item]
      )
      return
    }

    if (multiselect && typeof item === 'string') {
      if (!Array.isArray(value)) {
        onSelect?.([item])
        return
      }

      const selected = value?.find((v: string) => v === item)

      onSelect?.(
        selected
          ? value?.filter((v: string) => v !== item)
          : [...(value || []), item]
      )
      return
    }

    if (isObject(item)) {
      onSelect?.(item)
      modal.close()
      return
    }

    onSelect?.(item)
    modal.close()
  }

  const selected = (item: string | DataProps) => {
    if (
      multiselect &&
      isObject(item) &&
      Array.isArray(value) &&
      typeof item !== 'string'
    )
      return value?.find((v: any) => v.id === item.id)

    if (multiselect && Array.isArray(value) && typeof item === 'string')
      return value?.find((v: string) => v === item)

    if (
      isObject(item) &&
      isObject(value) &&
      typeof item !== 'string' &&
      typeof value !== 'string'
    )
      return item.id === value?.id

    return item === value
  }

  const body = React.useMemo(
    () => (
      <ScrollView>
        {data.map((item: string | DataProps, index: number) => (
          <TouchableOpacity
            activeOpacity={0.8}
            key={index}
            onPress={() => handleSelect(item)}
          >
            {renderItem({ index, selected: selected(item), item })}
          </TouchableOpacity>
        ))}
      </ScrollView>
    ),

    [value]
  )

  React.useEffect(() => {
    if (multiselect) modal.set({ body })
  }, [value])

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() =>
        modal.open({
          body,
          title: 'Gênero',
          custonStyle: {
            maxH: 200,
          },
          ...(multiselect
            ? {
                mainButton: () => modal.close(),
                labelMainButton: 'Ok',
              }
            : {}),
        })
      }
    >
      {(children &&
        React.cloneElement(children, { value, multiselect, label, error })) ||
        (Select?.Button && (
          <Select.Button
            value={value}
            multiselect={multiselect}
            label={label}
            error={error}
          />
        ))}
      {!!error && <Text {...othersStyles?.error}>{error}</Text>}
    </TouchableOpacity>
  )
}

type ButtonProps = React.FC<{
  value: string | any
  multiselect?: boolean
  error?: string
  label?: string
}> | null

const Button: ButtonProps = null

type SelectProps = {
  name?: string
  control?: Control
  defaultValue?: string | DataProps
} & SelectComponentProps

export const Select: {
  (props: SelectProps): JSX.Element
  Button: ButtonProps
} = (props) => {
  const { control, name } = props
  if (!!control || !!name) {
    return (
      <Controller
        name={name || ''}
        control={control}
        defaultValue={props.defaultValue}
        render={({ field, fieldState }) =>
          selectComponent({
            ...props,
            value: field.value,
            onSelect: field.onChange,
            error: fieldState.error?.message,
          })
        }
      />
    )
  }

  return selectComponent(props)
}

Select.Button = Button
