/**
 * CalendarContainer
 */
import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useForm} from 'react-hook-form'
import dayjs from 'dayjs'

// Components
import {Calendar, TodoModalEdit} from '@domain/object'

// Redux Action
import todoAction from '@redux/todo/actions'
import logAction  from '@redux/log/actions'

// Entity
import {typeCalendarState} from '@entity/calendar'
import {typeTodo, typeTodoForm, typeTodoOption} from '@entity/todo'
import {typeLog} from '@entity/log'
import {typeRootState} from '@entity/rootState'

// Serives
import {formatState, formatDate, getNextMonth, getPreviousMonth} from '@services/calendar'
import {TODO_SELECTS} from '@services/todo'
import {YYYYMMDD_hhmm} from '@services/log'

// Utils
import createMergeProps from '@utils/createMergeProps'

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

  // Form Modal
  const [open, setOpen] = useState(false)
  const [initDate, setDate] = useState<string>('')
  const handleOpen  = (date?: dayjs.Dayjs | null) => {
    if(date) {
      setDate(formatDate(date))
    }
    setOpen(true)
  }
  const handleClose = () => setOpen(false)

  // TodoForm
  const {register, handleSubmit, errors} = useForm<typeTodo>({reValidateMode: 'onChange'})
  const title: typeTodoForm = createMergeProps({
    name: 'title',
    ref: register({
      required: true
    }),
    error: errors.title && 'タイトルが入力されていません'
  })

  const description: typeTodoForm = createMergeProps({
    name: 'memo',
    ref: register
  })

  const date: typeTodoForm = createMergeProps({
    name: 'date',
    defaultValue: initDate,
    ref: register
  })

  const todos = useSelector((state: typeRootState) => state.todo.todoList)
  const dispatch = useDispatch()
  const onSubmit = handleSubmit((data: typeTodo) => {
    const len = todos.length
    const id = len === 0 ? 1 : todos[len - 1].id + 1
    const todo: typeTodo = {
      ...data,
      id,
      done: false
    }
    dispatch(todoAction.addTodo(todo))

    const {title} = data
    const log: typeLog = {
      id,
      title,
      status: '追加',
      operatedAt: YYYYMMDD_hhmm()
    }
    dispatch(logAction.addOperationLog(log))

    handleClose()
  })

  return (
    <>
      <Calendar {...{calendar, navigation, handleOpen}} />
      <TodoModalEdit {...{open, title, date, description, onSubmit, handleClose}} />
    </>
  )
}