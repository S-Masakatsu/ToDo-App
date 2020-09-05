/**
 * ToDo登録フォーム
 * TodoForm Domain Object Component
 */
import React from 'react'

// Entity
import {typeTodoForm} from '@entity/todo'

// Components
import {TodoEdit} from '@domain/element'
import {ModalWrapper, OpenButton} from '@gui/parts'

interface Props {
  open:        boolean,
  handleOpen:  (res?: React.BaseSyntheticEvent) => void,
  handleClose: (res?: React.BaseSyntheticEvent) => void,
  title:       typeTodoForm,
  description: typeTodoForm,
  date:        typeTodoForm,
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
      <TodoEdit
        {...{title, description, date}}
        onClose={handleClose}
        onClick={onSubmit}
      />
    </ModalWrapper>
  </>
)