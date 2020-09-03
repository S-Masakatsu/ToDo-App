/**
 * TodoContainer
 */
import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useForm} from 'react-hook-form'

// Components
import {TodoForm, TodoList} from '@domain/object'

// Utils
import createMergeProps from '@utils/createMergeProps'

// Redux Action
import todoAction from '@redux/todo/actions'

// Entity
import {Todo, TodoOption} from '@entity/todo'
import {RootState} from '@entity/rootState'

// Services
import {TODO_SELECTS} from '@services/todo'

/**
 * TodoEditContainer
 */
export const TodoEditContainer:React.FC = () => {
  // Form Modal
  const [open, setOpen] = useState(false)
  const handleOpen  = () => setOpen(true)
  const handleClose = () => setOpen(false)

  // TodoForm
  const {register, handleSubmit, errors} = useForm<Todo>({reValidateMode: 'onChange'})
  const title = createMergeProps({
    name: 'title',
    ref: register({
      required: true
    }),
    error: errors.title && 'タイトルが入力されていません'
  })

  const description = createMergeProps({
    name: 'description',
    ref: register
  })

  const date = createMergeProps({
    name: 'date',
    ref: register
  })

  const todos = useSelector((state: RootState) => state.todo.todoList)
  const dispatch = useDispatch()
  const onSubmit = handleSubmit((data: Todo) => {
    const len = todos.length
    const _id = len === 0 ? 1 : todos[len - 1].id + 1
    const todo: Todo = createMergeProps({
      ...data,
      id: _id,
      done: false
    })
    dispatch(todoAction.addTodo(todo))
    handleClose()
  })

  return <TodoForm {...{open, handleOpen, handleClose, title, description, date, onSubmit}}/>
}


/**
 * TodoListContainer
 */
export const TodoListContainer:React.FC = () => {
  const todoList = useSelector((state: RootState) => state.todo.todoList)
  const [todo, setTodo] = useState<Todo[]>(todoList)
  useEffect(() => {
    setTodo(todoList)
  }, [todoList])

  // Todo Done Event
  const dispatch = useDispatch()
  const onChange = (id: number) => {
    dispatch(todoAction.doneTodo(id))
  }

  // Todo Show Select Event
  const [selected, setSelected] = useState(TODO_SELECTS[0].option)
  const select = createMergeProps(({
    selected: selected,
    onSelectedTodo: (choice: TodoOption) => {
      const _choice = TODO_SELECTS.filter(t => t.option === choice)
      if(_choice.length !== 0) {
        const {done} = _choice[0]
        if(done === undefined) {
          setTodo(todoList)
        } else {
          setTodo(todoList.filter(t => t.done === done))
        }
      }
      setSelected(choice)
    }
  }))

  return <TodoList {...{select, todo, onChange}}/>
}