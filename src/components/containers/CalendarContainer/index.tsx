/**
 * CalendarContainer
 */
import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import dayjs from 'dayjs'

// Components
import {
  Calendar,
  TodoModalEdit,
  TodoModalDetail
} from '@domain/object'

// Entity
import {typeCalendarState} from '@entity/calendar'
import {Toast} from '@gui/parts'
import {typeRootState} from '@entity/rootState'

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
import {useAlert, typeUseAlert} from '@utils/alert'


/**
 * Calendar Container
 */
export const CalendarContainer:React.FC = () => {
  const day = dayjs()
  const [calendar, setCalendar] = useState<typeCalendarState>(formatState(day))

  const handlePreviousMonth = () => setCalendar(getPreviousMonth)

  const handleNextMonth = () => setCalendar(getNextMonth)

  const navigation = createMergeProps({
    previous: handlePreviousMonth,
    next: handleNextMonth
  })

  // Toast Custom Hooks
  const {
    open: alertOpen,
    color,
    severity,
    message,
    setMessage,
    handleOpen: handleAlertOpen,
    handleClose: handleAlertClose,
  } = useAlert()
  const alert: typeUseAlert = createMergeProps({
    open: alertOpen,
    message,
    severity,
    color,
    handleClose: handleAlertClose
  })

  // Todo Add Custom Hooks
  const {open, form, onSubmit, handleOpen, handleClose} = useTodoAddForm()
  const addFormProps = createMergeProps({
    open,
    form,
    onSubmit: () => {
      onSubmit()
      if(setMessage) setMessage('ToDoを追加しました。')
      if(handleAlertOpen) handleAlertOpen('追加')
    },
    handleClose,
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

  const todoList = useSelector((state: typeRootState) => state.todo.todoList)

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
      if(handleAlertOpen && setMessage) {
        handleAlertOpen('削除')
        const todo = todoList.filter(i => i.id === id)
        setMessage(`${todo[0].title} を削除しました。`)
      }
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
    onSubmit: () => {
      onPutSubmit()
      if(handleAlertOpen && setMessage) {
        handleAlertOpen('更新')
        const todo = todoList.filter(i => i.id === id)
        setMessage(`${todo[0].title} を更新しました。`)
      }
    },
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
      <Toast {...alert}/>
    </>
  )
}