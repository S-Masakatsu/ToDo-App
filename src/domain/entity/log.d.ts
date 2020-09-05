import {typeTask} from '@entity/task'

/**
 * @type {'追加'|'削除'|'更新'|'完了'|'未完了'} ステータス
 */
export type typeStatus = '追加' | '削除' | '更新' | '完了' | '未完了'

/**
 * @type {string} 操作時刻
 */
type typeOperatedAt = string

/**
 * Log Data Object
 * @id         @type {number} ID
 * @title      @type {string} タイトル
 * @status     @type {typeStatus} ステータス
 * @operatedAt @type {typeOperatedAt} 操作時刻
 */
export type typeLog = typeTask & {
  status:     typeStatus
  operatedAt: typeOperatedAt
}

/**
 * Redux Log State
 * @logList @type {typeLog[]}
 */
export type typeLogState = {
  logList: typeLog[]
}


/**
 * show log status
 * @type {string}
 */
export type typeStatusLog = string

/**
 * table show log data
 * @type {Array} [操作時刻, 表示ログ]
 */
export type typeTableLog = [typeOperatedAt, typeStatusLog]