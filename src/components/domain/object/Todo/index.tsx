/**
 * ToDo登録フォーム
 * TodoForm Domain Object Component
 */
import React from 'react'

// Components
import {LayoutBox} from '@layouts'
import {
  TodoEdit,
  TodoSelected,
  TodoDetail,
  TodoDelete
} from '@domain/element'
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
  handleOpen: (id: number)    => void
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
  delOpen?:    boolean
  todoDelete?: {
    handleDeleteOpen?: (res?: React.BaseSyntheticEvent) => void
    handleDelete?:  (id?: number | undefined) => void
    handleCansell?: (res?: React.BaseSyntheticEvent) => void
  }
  form?: {
    open:        boolean
    handleOpen:  (res?: React.BaseSyntheticEvent) => void
    handleClose: (res?: React.BaseSyntheticEvent) => void
    form:        typeTodoForm
    onSubmit:    (res?: React.BaseSyntheticEvent) => void
  }
}

export const TodoModalDetail:React.FC<TodoDetailProps> = ({
  open,
  todo,
  handleClose,
  delOpen,
  todoDelete,
  form,
}) => (
  form?.open ? 
  <TodoModalEdit form={form} isPut={true} />
  :
  <ModalWrapper
    open={open}
    width={`${window.outerWidth * 0.9}px`}
    ariaLabelledby={'todo-registration-detail'}
    ariaDescribedby={'todo-detail'}
  >
    {!delOpen ? (
      <TodoDetail
        todo={todo}
        onClose={handleClose}
        handleDeleteOpen={todoDelete?.handleDeleteOpen}
        handlePutOpen={form?.handleOpen}
      />
    ):(
      <TodoDelete
        todo={todo}
        {...todoDelete}
      />
    )}
  </ModalWrapper>
)


/**
 * Todo Edit
 */
interface TodoEditProps {
  isPut?: boolean
  form: {
    open:        boolean
    handleClose: (res?: React.BaseSyntheticEvent) => void
    form:        typeTodoForm
    onSubmit:    (res?: React.BaseSyntheticEvent) => void
  }
}

export const TodoModalEdit:React.FC<TodoEditProps> = ({form, isPut}) => (
  <ModalWrapper
    open={form.open}
    width={`${window.outerWidth * 0.9}px`}
    ariaLabelledby={'todo-registration-form'}
    ariaDescribedby={'todo-input-form'}
  >
    <TodoEdit
      isPut={isPut}
      form={form.form}
      onClose={form.handleClose}
      onClick={form.onSubmit}
    />
  </ModalWrapper>
)


/**
 * Todo
 */
interface Props {
  handleOpen:  typeFormOpen
  form: {
    open:        boolean
    handleClose: (res?: React.BaseSyntheticEvent) => void
    form:        typeTodoForm
    onSubmit:    (res?: React.BaseSyntheticEvent) => void
  }
}

export const Todo:React.FC<Props> = props => (
  <>
    <OpenButton onClick={() => props.handleOpen()} />
    <TodoModalEdit {...props} />
  </>
)