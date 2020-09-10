import dayjs from 'dayjs'

/**
 * typeCalendarState
 * @year  @type {number} Year
 * @month @type {number} Month
 */
export type typeCalendarState = {
  year:  number
  month: number
}


/**
 * typeCalendarDay
 * @type {dayjs.Dayjs}
 */
export type typeCalendarDay = dayjs.Dayjs


/**
 * typeCalendar
 * @type {typeCalendarDay[]}
 */
export type typeCalendar = typeCalendarDay[]


/**
 * typeFormat
 */
export type typeFormat = 'D' | 'M月D日' | 'M/D' | 'YYYYMMDD' | 'YYYYMM'

/**
 * typeWeek
 */
export type typeWeek = '日' | '月' | '火' | '水' | '木' | '金' | '土'