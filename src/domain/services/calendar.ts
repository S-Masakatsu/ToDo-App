import dayjs from 'dayjs'

// Entity
import {
  typeCalendarState,
  typeCalendarDay,
  typeCalendar,
  typeFormat
} from '@entity/calendar'

// Constants
const CALENDAR_GRID = 7 * 5 // 35


/**
 * 日付配列を作成する
 */
export const createCalendar = (d: typeCalendarState): typeCalendar => {
  const firstDay = getMonth(d)
  const firstDayIdx = firstDay.day()

  return Array(CALENDAR_GRID).fill(0).map((_, i) => {
    const diffFromFirstDay = i - firstDayIdx
    return firstDay.add(diffFromFirstDay, 'day')
  })
}


/**
 * その年月のdayjsを返します
 * @param {typeCalendarState} d 年・月
 * @returns {dayjs.Dayjs} dayjs
 */
export const getMonth = (d: typeCalendarState): dayjs.Dayjs => dayjs(`${d.year}-${d.month}`)


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
 * 年月日をフォーマットする
 * @param day {typeCalendarDay} 
 */
export const formatDate = (day?: typeCalendarDay): string => {
  if(!day) return '1'
  const format = 'YYYY-MM-DD'
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


/**
 * 差分のcalendar stateを作成する高階関数
 * @param {number} diff 差分の月数
 * @returns {typeCalendarState} calendar state
 */
const getMonthStateCreator = (diff: number) => (d: typeCalendarState): typeCalendarState => {
  const day = getMonth(d).add(diff, 'month')
  return formatState(day)
}


/**
 * Next Month
 * @returns {typeCalendarState} 1ヶ月後のcalendar state
 */
export const getNextMonth = getMonthStateCreator(1)


/**
 * Previous Month
 * @returns {typeCalendarState} 1ヶ月前のcalendar state
 */
export const getPreviousMonth = getMonthStateCreator(-1)


/**
 * state用のフォーマット
 * @param {dayjs.Dayjs} day
 * @returns {typeCalendarState} calendar state
 */
export const formatState = (day: dayjs.Dayjs): typeCalendarState => ({
  year: day.year(),
  month: day.month() + 1,
})