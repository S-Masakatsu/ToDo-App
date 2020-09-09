/**
 * ToDo登録フォーム
 * TodoForm Domain Object Component
 */
import React from 'react'

// Components
import {LayoutBox}     from '@layouts'
import {TodoEdit, TodoSelected}  from '@domain/element'
import {ModalWrapper, OpenButton} from '@gui/parts'
import {ListCheckItem} from '@gui/groups'

// Entity
import {
  typeTodo,
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
  todo:      typeTodo[],
  onChange?: any
}

export const TodoList:React.FC<TodoListProps> = ({select, todo, onChange}) => (
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
      />  
    )}
  </LayoutBox>
)


/**
 * Todo Edit
 */
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


/**
 * Todo
 */
interface Props {
  open:        boolean,
  handleOpen:  (res?: React.BaseSyntheticEvent) => void,
  handleClose: (res?: React.BaseSyntheticEvent) => void,
  title:       typeTodoForm,
  description: typeTodoForm,
  date:        typeTodoForm,
  onSubmit:    (res?: React.BaseSyntheticEvent) => void
}

export const Todo:React.FC<Props> = props => (
  <>
    <OpenButton onClick={props.handleOpen} />
    <TodoModalEdit {...props} />
  </>
)