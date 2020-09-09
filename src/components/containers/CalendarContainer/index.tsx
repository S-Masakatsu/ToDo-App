/**
 * CalendarContainer
 */
import React, {useState} from 'react'
import dayjs from 'dayjs'

// Components
import {Calendar, TodoModalEdit} from '@domain/object'


// Entity
import {typeCalendarState} from '@entity/calendar'

// Serives
import {formatState, getNextMonth, getPreviousMonth} from '@services/calendar'

// Utils
import createMergeProps from '@utils/createMergeProps'
import {useTodoAddForm} from '@utils/todoForm'


/**
 * Calendar Container
 */
export const CalendarContainer:React.FC = () => {
  const day = dayjs()
  const [calendar, setCalendar] = useState<typeCalendarState>(formatState(day))

  const handlePreviousMonth = () => {
    setCalendar(getPreviousMonth)
  }

  const handleNextMonth = () => {
    setCalendar(getNextMonth)
  }

  const navigation = createMergeProps({
    previous: handlePreviousMonth,
    next: handleNextMonth
  })

  const {open, form, onSubmit, handleOpen, handleClose} = useTodoAddForm()

  return (
    <>
      <Calendar {...{calendar, navigation, handleOpen}} />
      <TodoModalEdit {...{open, form, onSubmit, handleClose}} />
    </>
  )
}