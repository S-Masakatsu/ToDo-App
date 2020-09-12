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
import {
  useTodoAddForm,
  useTodoDetail,
  useTodoDelete,
  useTodoPutForm
} from '@utils/todo'


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
  const addFormProps = createMergeProps({
    open, form, onSubmit, handleClose
  })

  // Todo Detail Custom Hooks
  const {
    open: dOpen,
    task,
    handleOpen: detailHandleOpen,
    handleClose: detailHandleClose
  } = useTodoDetail()
  const [id, setTodoID] = useState<number>()
  useEffect(() => {
    setTodoID(task?.id)
  }, [task])

  // Show Detail to form canceling a modal event
  useEffect(() => {
    handleClose()
  }, [dOpen])

  // Todo Delete Custom Hooks
  const {
    open: delOpen,
    handleOpen: handleDeleteOpen,
    handleDelete: handleTodoDelete,
    handleClose: handleCansell
  } = useTodoDelete()
  const todoDelete = createMergeProps({
    handleDeleteOpen,
    handleDelete: (id?: number) => {
      handleTodoDelete(id)
      handleCansell()
      detailHandleClose()
    },
    handleCansell
  })

  // Todo Put Custom Hooks
  const {
    open: putOpen,
    onSubmit: onPutSubmit,
    form: putForm,
    handleOpen: handlePutOpen,
    handleClose: handlePutClose
  } = useTodoPutForm()
  const putFormProps = createMergeProps({
    open: putOpen,
    form: putForm,
    onSubmit: onPutSubmit,
    handleOpen: () => {
      if(!id) return
      handlePutOpen(id)
      detailHandleClose()
    },
    handleClose: () => {
      if(!id) return
      handlePutClose()
      detailHandleOpen(id)
    }
  })

  return (
    <>
      <Calendar
        {...{calendar, navigation, handleOpen}}
        scheduleOpen={detailHandleOpen}
      />
      <TodoModalEdit form={addFormProps} />
      <TodoModalDetail
        {...{delOpen, todoDelete}}
        todo={task}
        open={dOpen}
        handleClose={detailHandleClose}
        form={putFormProps}
      />
    </>
  )
}