import {Task} from '@entity/task'

export type Log = Task & {
  operatedAt: string  // 操作時刻
}