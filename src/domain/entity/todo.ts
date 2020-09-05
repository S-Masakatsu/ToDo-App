import {typeTitle, Task} from '@entity/task'

type Done = {done?: boolean}  // 完了したかどうか

type typeMemo = {
  description: string         // 説明
  date:        string | null  // 日付
}

export type Todo = Task & Done & typeMemo

export type TodoList = {
  todoList: Todo[]
}

export type TodoForm = typeTitle & typeMemo


// todo selects
export type TodoOption = string

export type TodoSelectItem = Done & {
  option: TodoOption
}

export type TodoSelectEvent = (choice: TodoOption) => void