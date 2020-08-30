import {Task} from '@entity/task'

type TodoItem = Task & {
  description: String,        // 説明
  date:        string | null  // 日付
  done:        boolean        // 完了したかどうか
}

export type Todo = {
  todo:         TodoItem[]
}