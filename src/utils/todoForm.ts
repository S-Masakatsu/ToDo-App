/**
 * todo form custom Hooks
 * todoForm utils Hook
 */
import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useForm} from 'react-hook-form'
import dayjs from 'dayjs'

// Redux Action
import todoAction from '@redux/todo/actions'
import logAction  from '@redux/log/actions'

// Entity
import {typeTodo, typeFormOpen, typeTodoForm} from '@entity/todo'
import {typeLog} from '@entity/log'
import {typeRootState} from '@entity/rootState'

// Serives
import {formatDate} from '@services/calendar'
import {YYYYMMDD_hhmm} from '@services/log'

// Utils
import createMergeProps from '@utils/createMergeProps'

export const useTodoAddForm = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [initDate, setDate] = useState<string>('')
  // Modal Open
  const handleOpen: typeFormOpen = (date?: dayjs.Dayjs | null) => {
    if(date) {
      setDate(formatDate(date))
    }
    setOpen(true)
  }
  // Modal Close
  const handleClose = () => setOpen(false)

  // TodoForm
  const {register, handleSubmit, errors} = useForm<typeTodo>({reValidateMode: 'onChange'})
  const form: typeTodoForm = createMergeProps({
    title: {
      name: 'title',
      ref: register({
        required: true
      }),
      error: errors.title && 'タイトルが入力されていません'
    },
    description: {
      name: 'memo',
      ref: register
    },
    date: {
      name: 'date',
      defaultValue: initDate,
      ref: register
    }
  })

  const todos = useSelector((state: typeRootState) => state.todo.todoList)
  const dispatch = useDispatch()
  const onSubmit = handleSubmit((data: typeTodo) => {
    const len = todos.length
    const id = len === 0 ? 1 : todos[len - 1].id + 1
    // Add Todo
    const todo: typeTodo = {
      ...data,
      id,
      done: false
    }
    dispatch(todoAction.addTodo(todo))
    // Add Log
    const {title} = data
    const log: typeLog = {
      id,
      title,
      status: '追加',
      operatedAt: YYYYMMDD_hhmm()
    }
    dispatch(logAction.addOperationLog(log))
    // Modal Close
    handleClose()
  })

  return {open, form, onSubmit, handleOpen, handleClose}
}