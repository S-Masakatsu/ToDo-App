import dayjs from 'dayjs'

// Entity
import {typeTitle} from '@entity/task'
import {typeLog, typeStatus, typeStatusLog, typeTableLog} from '@entity/log'

export const YYYYMMDD_hhmm = (): string => {
  const day = dayjs()
  const format = 'YY/MM/DD HH:mm'
  return day.format(format)
}

const createLog = (title: typeTitle, status: typeStatus): typeStatusLog =>
  `「${title}」を${status}しました`

export const createStatusLog = (state: typeLog): typeTableLog => [
  state.operatedAt,
  createLog(state.title, state.status)
]