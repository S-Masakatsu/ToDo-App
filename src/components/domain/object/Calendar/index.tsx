/**
 * Calendar
 * Calendar Domain Object Component
 */
import React from 'react'

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
}

export const Calendar:React.FC<Props> = props => (
  <CalendarBord {...props} />
)