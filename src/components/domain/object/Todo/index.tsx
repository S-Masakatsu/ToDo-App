/**
 * ToDo登録フォーム
 * TodoForm Domain Object Component
 */
import React from 'react'

// Components
import {LayoutBox}     from '@layouts'
import {TodoEdit, TodoSelected, TodoDetail}  from '@domain/element'
import {ModalWrapper, OpenButton} from '@gui/parts'
import {ListCheckItem} from '@gui/groups'

// Entity
import {
  typeTodo,
  typeFormOpen,
  typeTodoForm,
  typeTodoOption,
  typeTodoSelectEvent
} from '@entity/todo'


/**
 * TodoList
 */
interface TodoListProps {
  select: {
    selected?:       typeTodoOption
    onSelectedTodo?: typeTodoSelectEvent
  }
  todo:       typeTodo[]
  handleOpen: (id: number)    => void,
  onChange:   (resID: number) => void
}

export const TodoList:React.FC<TodoListProps> = ({select, todo, handleOpen, onChange}) => (
  <LayoutBox maxWidth='560px' hasCenter={true} >
    <TodoSelected {...select} />
    {todo.map(t =>
      <ListCheckItem
        key={t.id}
        id={String(t.id)}
        title={t.title}
        date={t.date}
        checked={t.done}
        onChange={() => onChange(t.id)}
        onClick={() => handleOpen(t.id)}
      />
    )}
  </LayoutBox>
)


/**
 * Todo Detail
 */
interface TodoDetailProps {
  open:        boolean
  todo?:       typeTodo
  handleClose: (res?: React.BaseSyntheticEvent) => void
}

export const TodoModalDetail:React.FC<TodoDetailProps> = ({
  open,
  todo,
  handleClose,
}) => (
  <ModalWrapper
    open={open}
    width={`${window.outerWidth * 0.9}px`}
    ariaLabelledby={'todo-registration-detail'}
    ariaDescribedby={'todo-detail'}
  >
    <TodoDetail
      todo={todo}
      onClose={handleClose}
    />
  </ModalWrapper>
)


/**
 * Todo Edit
 */
interface TodoEditProps {
  open:        boolean
  handleClose: (res?: React.BaseSyntheticEvent) => void
  form:        typeTodoForm
  onSubmit:    (res?: React.BaseSyntheticEvent) => void
}

export const TodoModalEdit:React.FC<TodoEditProps> = ({
  open,
  handleClose,
  form,
  onSubmit
}) => (
  <ModalWrapper
    open={open}
    width={`${window.outerWidth * 0.9}px`}
    ariaLabelledby={'todo-registration-form'}
    ariaDescribedby={'todo-input-form'}
  >
    <TodoEdit
      {...{...form}}
      onClose={handleClose}
      onClick={onSubmit}
    />
  </ModalWrapper>
)


/**
 * Todo
 */
interface Props {
  open:        boolean
  handleOpen:  typeFormOpen
  handleClose: (res?: React.BaseSyntheticEvent) => void
  form:        typeTodoForm
  onSubmit:    (res?: React.BaseSyntheticEvent) => void
}

export const Todo:React.FC<Props> = props => (
  <>
    <OpenButton onClick={() => props.handleOpen()} />
    <TodoModalEdit {...props} />
  </>
)