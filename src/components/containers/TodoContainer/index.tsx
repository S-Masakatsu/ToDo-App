/**
 * TodoContainer
 */
import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

// Components
import {Todo, TodoList, TodoModalDetail} from '@domain/object'

// Redux Action
import todoAction from '@redux/todo/actions'
import logAction  from '@redux/log/actions'

// Entity
import {typeTodo, typeTodoOption} from '@entity/todo'
import {typeLog} from '@entity/log'
import {typeRootState} from '@entity/rootState'

// Services
import {TODO_SELECTS} from '@services/todo'
import {YYYYMMDD_hhmm} from '@services/log'

// Utils
import createMergeProps from '@utils/createMergeProps'
import {
  useTodoAddForm,
  useTodoDetail,
  useTodoDelete,
  useTodoPutForm
} from '@utils/todo'


/**
 * TodoEdit Container
 */
export const TodoEditContainer:React.FC = () => {
  const {open, form, onSubmit, handleOpen, handleClose} = useTodoAddForm()
  const formProps = createMergeProps({
    open, form, onSubmit, handleClose
  })
  return <Todo {...{handleOpen}} form={formProps} />
}


/**
 * TodoList Container
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

  // Todo Detail Custom Hooks
  const [id, setTodoID] = useState<number>()
  const {open, task, handleOpen, handleClose} = useTodoDetail()
  useEffect(() => {
    setTodoID(task?.id)
  }, [task])

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
      handleClose()
    },
    handleCansell
  })

  // Todo Put Custom Hooks
  const {
    open: putOpen,
    onSubmit,
    form: putForm,
    handleOpen: handlePutOpen,
    handleClose: handlePutClose
  } = useTodoPutForm()
  const form = createMergeProps({
    open: putOpen,
    form: putForm,
    onSubmit,
    handleOpen: () => {
      if(!id) return
      handlePutOpen(id)
      handleClose()
    },
    handleClose: () => {
      if(!id) return
      handlePutClose()
      handleOpen(id)
    }
  })

  return (
    <>
      <TodoList {...{select, todo, onChange, handleOpen}}/>
      <TodoModalDetail {...{open, handleClose, delOpen, todoDelete, form}} todo={task} />
    </>
  )
}