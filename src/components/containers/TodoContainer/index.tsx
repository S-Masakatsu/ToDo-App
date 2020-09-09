/**
 * TodoContainer
 */
import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useForm} from 'react-hook-form'

// Components
import {Todo, TodoList} from '@domain/object'

// Utils
import createMergeProps from '@utils/createMergeProps'

// Redux Action
import todoAction from '@redux/todo/actions'
import logAction  from '@redux/log/actions'

// Entity
import {typeTodo, typeTodoForm, typeTodoOption} from '@entity/todo'
import {typeLog} from '@entity/log'
import {typeRootState} from '@entity/rootState'

// Services
import {TODO_SELECTS} from '@services/todo'
import {YYYYMMDD_hhmm} from '@services/log'

/**
 * TodoEditContainer
 */
export const TodoEditContainer:React.FC = () => {
  // Form Modal
  const [open, setOpen] = useState(false)
  const handleOpen  = () => setOpen(true)
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

  return <Todo {...{open, handleOpen, handleClose, title, description, date, onSubmit}}/>
}


/**
 * TodoListContainer
 */
export const TodoListContainer:React.FC = () => {
  const todoList = useSelector((state: typeRootState) => state.todo.todoList)

  const [todo, setTodo] = useState<typeTodo[]>(todoList)
  const [selected, setSelected] = useState(TODO_SELECTS[0].option)
  const [idList, setID] = useState<number[]>([])

  useEffect(() => {
    const _choice = TODO_SELECTS.filter(t => t.option === selected)
    if(_choice.length !== 0) {
      const {done} = _choice[0]
      if(done === undefined) {
        setTodo(todoList)
      } else {
        const _todo = Array.from(new Set([
          ...todoList.filter(t => t.done === done),
          ...todoList.filter(t => idList.some(i => i === t.id))
        ]))
        setTodo(_todo.sort((a, b) => a.id < b.id ? -1 : 1))
      }
    }
  }, [todoList, selected, idList])

  // Todo Done Event
  const dispatch = useDispatch()
  const onChange = (resID: number) => {
    setID([...idList, resID])
    dispatch(todoAction.doneTodo(resID))
    const t = todoList.filter(t => t.id === resID)[0]
    const log: typeLog = {
      id: t.id,
      title: t.title,
      status: t.done ? '未完了' : '完了',
      operatedAt: YYYYMMDD_hhmm()
    }
    dispatch(logAction.addOperationLog(log))
  }

  // Todo Show Select Event
  const select = createMergeProps(({
    selected: selected,
    onSelectedTodo: (choice: typeTodoOption) => {
      const isChange = choice !== 'DEFAULT'
      setSelected(isChange ? choice : selected)
      isChange && setID([])
    }
  }))

  return <TodoList {...{select, todo, onChange}}/>
}