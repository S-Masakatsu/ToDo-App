import dayjs from 'dayjs'

// Entity
import {typeTitle} from '@entity/task'
import {Log, typeStatus, typeStatusLog, TableLog} from '@entity/log'

export const YYYYMMDD_hhmm = (): string => {
  const day = dayjs()
  const format = 'YY/MM/DD HH:mm'
  return day.format(format)
}

const createLog = (title: typeTitle, status: typeStatus): typeStatusLog =>
  `「${title}」を${status}しました`

export const createStatusLog = (state: Log): TableLog => [
  state.operatedAt,
  createLog(state.title, state.status)
]