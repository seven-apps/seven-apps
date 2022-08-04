import React from 'react'
import { useComponentStyle } from '@sevenapps/theme'

export const useInputStyle = (props, focus, error) => {
  const [style, otherStyles] = useComponentStyle(props, 'Input', [
    'focus',
    'label',
    'error',
  ])

  const {
    focus: focusStyle,
    label: labelStyle,
    error: errorStyle,
  } = otherStyles

  let inputStyle = style

  if (error) {
    let errStyle = { ...errorStyle }
    delete errStyle.padding
    delete errStyle.paddingLeft

    inputStyle = {
      ...inputStyle,
      ...errStyle,
      ...(inputStyle?.padding ? { padding: inputStyle?.padding } : {}),
      ...(inputStyle?.paddingLeft
        ? { paddingLeft: inputStyle?.paddingLeft }
        : {}),
    }
  }

  if (focus) {
    inputStyle = {
      ...inputStyle,
      ...focusStyle,
    }
  }

  return {
    labelStyle: {
      ...labelStyle,
      color: error ? errorStyle.color : labelStyle.color,
    },
    errorStyle,
    inputStyle,
  }
}
