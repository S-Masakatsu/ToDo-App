import {Task} from '@entity/task'

export type Log = {
  task:       Task,   // ID, Title
  operatedAt: string  // 操作時刻
}

export type Logs = {
  log: Log[]
}