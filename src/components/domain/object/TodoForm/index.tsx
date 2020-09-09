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

interface TodoEditProps {
  open:        boolean,
  handleClose: (res?: React.BaseSyntheticEvent) => void,
  title:       typeTodoForm,
  description: typeTodoForm,
  date:        typeTodoForm,
  onSubmit:    (res?: React.BaseSyntheticEvent) => void
}

export const TodoModalEdit:React.FC<TodoEditProps> = ({
  open,
  handleClose,
  title,
  description,
  date,
  onSubmit
}) => (
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
)

interface Props {
  open:        boolean,
  handleOpen:  (res?: React.BaseSyntheticEvent) => void,
  handleClose: (res?: React.BaseSyntheticEvent) => void,
  title:       typeTodoForm,
  description: typeTodoForm,
  date:        typeTodoForm,
  onSubmit:    (res?: React.BaseSyntheticEvent) => void
}

export const TodoForm:React.FC<Props> = props => (
  <>
    <OpenButton onClick={props.handleOpen} />
    <TodoModalEdit {...props} />
  </>
)