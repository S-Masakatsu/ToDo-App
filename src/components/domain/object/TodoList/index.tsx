/**
 * ToDoリスト
 * TodoList Domain Object Component
 */
import React from 'react'

// Components
import {LayoutBox}     from '@layouts'
import {SelectedTodo}  from '@domain/element'
import {ListCheckItem} from '@gui/groups'

// Entity
import {Todo, TodoOption, TodoSelectEvent} from '@entity/todo'

interface Props {
  select: {
    selected?:       TodoOption
    onSelectedTodo?: TodoSelectEvent
  }
  todo:      Todo[],
  onChange?: any
}

export const TodoList:React.FC<Props> = ({select, todo, onChange}) => (
  <LayoutBox maxWidth='560px' hasCenter={true} >
    <SelectedTodo {...select} />
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