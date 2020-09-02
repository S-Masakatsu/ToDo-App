import {Task} from '@entity/task'

export type Todo = Task & {
  description: string         // 説明
  date:        string | null  // 日付
  done:        boolean        // 完了したかどうか
}

export type TodoList = {
  todoList: Todo[]
}

export type TodoForm = {
  title:        string
  description?: string
  date?:        string | null
}