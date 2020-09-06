import dayjs from 'dayjs'

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
export type typeFormat = 'D' | 'M月D日' | 'YYYYMMDD' | 'YYYYMM'

/**
 * typeWeek
 */
export type typeWeek = '日' | '月' | '火' | '水' | '木' | '金' | '土'