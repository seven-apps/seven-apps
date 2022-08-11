import React, { useState } from 'react'
import { useComponentStyle } from '@sevenapps/theme'

import ModalComponent, { ModalProps } from 'react-native-modal'

import { dispatch, act, useActions } from '../hooks'
import { Text } from '../Text'
import { Box } from '../Box'
import { Button } from '../Button'

export const modal = {
  open: (data) => dispatch(act.open, data),
  close: () => dispatch(act.close),
  set: (data) => dispatch(act.set, data),
}

const initialStateControl = {
  open: false,
  description: null,
  title: null,
  body: null,
  close: null,
  header: null,
  mainButton: null,
  labelMainButton: null,
  assistantButton: null,
  labelAssistantButton: null,
  onCloseButton: null,
  customStyle: {},
}

type ModalCustomProps = {
  HeaderLeftComponent?: React.ReactNode
  HeaderRightComponent?: React.ReactNode
  children?: null
}

export const Modal = ({
  HeaderLeftComponent,
  HeaderRightComponent,
  ...props
}: ModalProps & ModalCustomProps) => {
  const [style, otherStyles] = useComponentStyle(props, 'Modal', [
    'title',
    'header',
    'content',
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
    header,
    close,
    mainButton,
    labelMainButton,
    assistantButton,
    labelAssistantButton,
    customStyle,
  } = controlModal

  useActions({
    open: (data) => setControlModal({ open: true, ...data }),
    close: () => setControlModal(initialStateControl),
    set: (data) => setControlModal((state) => ({ ...state, ...data })),
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
      <Box {...{ ...style, ...customStyle }}>
        {title && (
          <Box
            center={!HeaderLeftComponent || !HeaderRightComponent}
            row
            {...{
              ...otherStyles.header,
              ...(HeaderLeftComponent || HeaderRightComponent
                ? { justifyContent: 'space-between' }
                : {}),
            }}
          >
            {!!header ? (
              header
            ) : (
              <>
                {HeaderLeftComponent ? (
                  HeaderLeftComponent
                ) : (
                  <Box h={27.5} w={27.5} />
                )}

                <Text {...otherStyles.title}>{title}</Text>

                {HeaderRightComponent ? (
                  HeaderRightComponent
                ) : (
                  <Box h={27.5} w={27.5} />
                )}
              </>
            )}
          </Box>
        )}

        <Box {...otherStyles.content}>
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
