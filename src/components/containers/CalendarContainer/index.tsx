/**
 * CalendarContainer
 */
import React, {useState, useEffect} from 'react'
import dayjs from 'dayjs'

// Components
import {
  Calendar,
  TodoModalEdit,
  TodoModalDetail
} from '@domain/object'

// Entity
import {typeCalendarState} from '@entity/calendar'

// Serives
import {
  formatState,
  getNextMonth,
  getPreviousMonth
} from '@services/calendar'

// Utils
import createMergeProps from '@utils/createMergeProps'
import {useTodoAddForm, useTodoDetail} from '@utils/todo'


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

  // Todo Detail Custom Hooks
  const {
    open: dOpen,
    task,
    handleOpen: detailHandleOpen,
    handleClose: detailHandleClose
  } = useTodoDetail()

  // Show Detail to form canceling a modal event
  useEffect(() => {
    handleClose()
  }, [dOpen])

  return (
    <>
      <Calendar
        {...{calendar, navigation, handleOpen}}
        scheduleOpen={detailHandleOpen}
      />
      <TodoModalEdit {...{open, form, onSubmit, handleClose}} />
      <TodoModalDetail todo={task} open={dOpen} handleClose={detailHandleClose} />
    </>
  )
}