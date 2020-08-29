import {Task} from '@entity/task'

export type Todo = Task & {
  body: String,   // 詳細
  done: boolean   // 完了したかどうか
}

export type Todos = {
  todo: Todo[]
}