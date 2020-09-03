import {Task} from '@entity/task'

type Done = {done?: boolean}  // 完了したかどうか

export type Todo = Task & Done & {
  description: string         // 説明
  date:        string | null  // 日付
}

export type TodoList = {
  todoList: Todo[]
}

export type TodoForm = {
  title:        string
  description?: string
  date?:        string | null
}


// todo selects
export type TodoOption = string

export type TodoSelectItem = Done & {
  option: TodoOption
}

export type TodoSelectEvent = (choice: TodoOption) => void