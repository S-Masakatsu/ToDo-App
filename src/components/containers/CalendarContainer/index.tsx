/**
 * CalendarContainer
 */
import React, {useState} from 'react'
import dayjs from 'dayjs'

// Components
import {Calendar} from '@domain/object'

// Entity
import {typeCalendarState} from '@entity/calendar'

export const CalendarContainer:React.FC = () => {
  const day = dayjs()
  const [calendar, setCalendar] = useState<typeCalendarState>({
    year: day.year(),
    month: day.month() + 1
  })

  const setYear  = (y: number) => setCalendar({...calendar, year: y})
  const setMonth = (m: number) => setCalendar({...calendar, month: m})

  return <Calendar {...{calendar}} />
}