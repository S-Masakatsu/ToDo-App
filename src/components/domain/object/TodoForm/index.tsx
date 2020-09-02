/**
 * ToDo登録フォーム
 * TodoForm Domain Object Component
 */
import React from 'react'

// Components
import {Todo} from '@domain/element'
import {ModalWrapper, OpenButton} from '@gui/parts'

interface Form {
  name:   string
  ref:    any
  error?: string
}

interface Props {
  open:        boolean,
  handleOpen:  (res?: React.BaseSyntheticEvent) => void,
  handleClose: (res?: React.BaseSyntheticEvent) => void,
  title:       Form,
  description: Form,
  date:        Form,
  onSubmit:    (res?: React.BaseSyntheticEvent) => void
}

export const TodoForm:React.FC<Props> = ({
  open,
  handleOpen,
  handleClose,
  title,
  description,
  date,
  onSubmit
}) => (
  <>
    <OpenButton onClick={handleOpen} />
    <ModalWrapper
      open={open}
      width={`${window.outerWidth * 0.9}px`}
      ariaLabelledby={'todo-registration-form'}
      ariaDescribedby={'todo-input-form'}
    >
      <Todo
        {...{title, description, date}}
        onClose={handleClose}
        onClick={onSubmit}
      />
    </ModalWrapper>
  </>
)