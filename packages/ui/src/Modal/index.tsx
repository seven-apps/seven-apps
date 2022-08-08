import React, { useState } from 'react'
import { useComponentStyle } from '@sevenapps/theme'

import ModalComponent from 'react-native-modal'

import { dispatch, act, useActions } from '../hooks'
import { Text } from '../Text'
import { Box } from '../Box'
import { Button } from '../Button'

export const modal = {
  open: (data) => dispatch(act.open, data),
  close: () => dispatch(act.close),
}

const initialStateControl = {
  open: false,
  description: null,
  title: null,
  body: null,
  close: null,
  mainButton: null,
  labelMainButton: null,
  assistantButton: null,
  labelAssistantButton: null,
}

export const Modal = (props) => {
  const [style, otherStyles] = useComponentStyle(props, 'Modal', [
    'title',
    'header',
    'description',
    'mainButton',
    'assistantButton',
  ])
  const [controlModal, setControlModal] = useState(initialStateControl)
  const {
    open,
    description,
    title,
    body,
    close,
    mainButton,
    labelMainButton,
    assistantButton,
    labelAssistantButton,
  } = controlModal

  useActions({
    open: (data) => setControlModal({ open: true, ...data }),
    close: () => setControlModal(initialStateControl),
  })

  return (
    <ModalComponent
      onBackdropPress={modal.close}
      backdropOpacity={0.5}
      isVisible={open}
      style={{
        justifyContent: 'flex-end',
        margin: 0,
      }}
    >
      <Box {...style}>
        {title && (
          <Box {...otherStyles.header}>
            <Text {...otherStyles.title}>{title}</Text>
          </Box>
        )}

        <Box p="2xl" w="100%">
          {/* add icon  */}
          {description && (
            <Text {...otherStyles.description}>{description}</Text>
          )}

          {!!body && body}

          {labelMainButton && (
            <Button mt="md" onPress={mainButton || modal.close}>
              {labelMainButton}
            </Button>
          )}

          {labelAssistantButton && (
            <Button
              variant="link"
              mt="md"
              onPress={assistantButton || modal.close}
            >
              {labelAssistantButton}
            </Button>
          )}
        </Box>
      </Box>
    </ModalComponent>
  )
}
