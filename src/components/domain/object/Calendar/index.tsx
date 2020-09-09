/**
 * Calendar
 * Calendar Domain Object Component
 */
import React from 'react'
import dayjs from 'dayjs'

// Components
import {CalendarBord} from '@domain/element'

// Entity
import {typeCalendarState} from '@entity/calendar'

interface Props {
  calendar: typeCalendarState
  navigation: {
    previous: (res: React.BaseSyntheticEvent) => void,
    next:     (res: React.BaseSyntheticEvent) => void
  }
  handleOpen: (date?: dayjs.Dayjs | null) => void
}

export const Calendar:React.FC<Props> = props => (
  <CalendarBord {...props} />
)