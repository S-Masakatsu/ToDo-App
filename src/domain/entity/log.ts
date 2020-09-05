import {Task} from '@entity/task'

export type typeStatus = '追加' | '削除' | '更新' | '完了' | '未完了'  // ステータス
type typeOperatedAt = string  // 操作時刻

export type Log = Task & {
  status:     typeStatus
  operatedAt: typeOperatedAt
}

export type LogList = {
  logList: Log[]
}

export type typeStatusLog = string

export type TableLog = [typeOperatedAt, typeStatusLog]