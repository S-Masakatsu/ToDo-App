import {Task} from '@entity/task'

export type Todo = {
  task: Task,     // ID, Title
  body: String,   // 詳細
  done: boolean   // 完了したかどうか
}

export type Todos = {
  todo: Todo[]
}