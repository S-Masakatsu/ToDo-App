import {Task} from '@entity/task'

type LogItem = Task & {
  operatedAt: string  // 操作時刻
}

export type Log = {
  log: LogItem[]
}