/**
 * ToDoリスト
 * TodoList Domain Object Component
 */
import React from 'react'

// Components
import {ListCheckItem} from '@gui/groups'

// Entity
import {Todo} from '@entity/todo'

interface Props {
  todo:      Todo[],
  onChange?: any
}

export const TodoList:React.FC<Props> = ({todo, onChange}) => (
  <>
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
  </>
)