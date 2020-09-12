/**
 * todo custom Hooks
 * todo utils Hook
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


/**
 * todo Add form custom Hooks
 */
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


/**
 * todo detail custom Hooks
 */
export const useTodoDetail = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [task, setTask] = useState<typeTodo>()

  const todoList = useSelector((state: typeRootState) => state.todo.todoList)
  const handleOpen = (id: number) => {
    const item = todoList.filter(i => i.id === id)
    setTask(item[0])
    setOpen(true)
  }

  const handleClose = () => setOpen(false)

  return {task, open, handleOpen, handleClose}
}


/**
 * todo delete custom Hooks
 */
export const useTodoDelete = () => {
  const [open, setOpen] = useState<boolean>(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const todoList = useSelector((state: typeRootState) => state.todo.todoList)
  const dispatch = useDispatch()
  const handleDelete = (id?: number) => {
    if(!id) return
    const todo = todoList.filter(t => t.id === id)
    const {title} = todo[0]
    dispatch(todoAction.deleteTodo(id))

    // Add Delete Log
    const log: typeLog = {
      id,
      title,
      status: '削除',
      operatedAt: YYYYMMDD_hhmm()
    }
    dispatch(logAction.addOperationLog(log))
  }

  return {open, handleOpen, handleClose, handleDelete}
}


/**
 * todo Put form custom Hooks
 */
export const useTodoPutForm = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [todo, setTodo] = useState<typeTodo>({
    id: 1,
    title: '',
    memo: '',
    date: '',
    done: false
  })

  const todoList = useSelector((state: typeRootState) => state.todo.todoList)
  const handleOpen = (id: number) => {
    const item = todoList.filter(i => i.id === id)
    setTodo(item[0])
    setValue(form.title.name, item[0].title)
    setOpen(true)
  }
  const handleClose = () => setOpen(false)

  // TodoForm
  const {register, handleSubmit, setValue, errors} = useForm<typeTodo>({
    reValidateMode: 'onChange'
  })
  const form: typeTodoForm = createMergeProps({
    title: {
      name: 'title',
      ref: register({
        required: true
      }),
      defaultValue: todo.title,
      error: errors.title && 'タイトルが入力されていません'
    },
    description: {
      name: 'memo',
      defaultValue: todo.memo,
      ref: register
    },
    date: {
      name: 'date',
      defaultValue: todo.date,
      ref: register
    }
  })


  const dispatch = useDispatch()
  const onSubmit = handleSubmit((data: typeTodo) => {
    // Put Todo
    dispatch(todoAction.putTodo({
      ...data,
      id: todo.id,
      done: todo.done
    }))
    // Add Log
    const {id} = data
    const log: typeLog = {
      id,
      title: todo.title,
      status: '更新',
      operatedAt: YYYYMMDD_hhmm()
    }
    dispatch(logAction.addOperationLog(log))
    // Modal Close
    handleClose()
  })

  return {open, form, onSubmit, handleOpen, handleClose}
}