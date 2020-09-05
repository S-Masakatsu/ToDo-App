/**
 * ToDoリスト
 * TodoList Domain Object Component
 */
import React from 'react'

// Components
import {LayoutBox}     from '@layouts'
import {TodoSelected}  from '@domain/element'
import {ListCheckItem} from '@gui/groups'

// Entity
import {typeTodo, typeTodoOption, typeTodoSelectEvent} from '@entity/todo'

interface Props {
  select: {
    selected?:       typeTodoOption
    onSelectedTodo?: typeTodoSelectEvent
  }
  todo:      typeTodo[],
  onChange?: any
}

export const TodoList:React.FC<Props> = ({select, todo, onChange}) => (
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