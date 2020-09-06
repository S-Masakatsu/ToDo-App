import dayjs from 'dayjs'

// Entity
import {typeCalendarDay, typeCalendar, typeFormat} from '@entity/calendar'

// Constants
const CALENDAR_GRID = 7 * 5 // 35


/**
 * 日付配列を作成する
 */
export const createCalendar = (): typeCalendar => {
  const firstDay = dayjs().startOf('month')
  const firstDayIdx = firstDay.day()

  return Array(CALENDAR_GRID).fill(0).map((_, i) => {
    const diffFromFirstDay = i - firstDayIdx
    return firstDay.add(diffFromFirstDay, 'day')
  })
}


/**
 * 月の最初かどうか
 * @param day {typeCalendarDay}
 * @returns {boolean} 最初ならtrue
 */
const isFirstDay = (day: typeCalendarDay): boolean => day.date() === 1


/**
 * 日付をフォーマットする
 * @param day {typeCalendarDay} 
 */
export const formatDay = (day?: typeCalendarDay): string => {
  if(!day) return '1'
  // 月の最初だけ月情報を付与する
  const format: typeFormat = isFirstDay(day) ? 'M月D日' : 'D'
  return day.format(format)
}


/**
 * 日付を比較する
 * @param d1 {typeCalendarDay}
 * @param d2 {typeCalendarDay}
 * @returns {boolean} 同じならtrue
 */
export const isSameDay = (d1?: typeCalendarDay, d2?: typeCalendarDay): boolean => {
  if(!d1 || !d2) return false
  const format: typeFormat = 'YYYYMMDD'
  return d1.format(format) === d2.format(format)
}


/**
 * 月を比較する
 * @param m1 {typeCalendarDay}
 * @param m2 {typeCalendarDay}
 * @returns {boolean} 同じならtrue
 */
export const isSameMonth = (m1?: typeCalendarDay, m2?: typeCalendarDay): boolean => {
  if(!m1 || !m2) return false
  const format: typeFormat = "YYYYMM"
  return m1.format(format) === m2.format(format)
}
