import {reducerWithInitialState} from 'typescript-fsa-reducers'

// Actions
import Action from './actions'

// Entity
import {typeTodoState} from '@entity/todo'

const init: typeTodoState = {
  todoList: []
}

export default reducerWithInitialState(init)
  .case(Action.addTodo, (state, payload) => ({
    todoList: [...state.todoList, payload]
  }))
  .case(Action.doneTodo, (state, id) => ({
    todoList: state.todoList.map(t => t.id === id ? {...t, done: !t.done} : t)
  }))
  .case(Action.deleteTodo, (state, id) => ({
    todoList: state.todoList.filter(t => t.id !== id)
  }))
  .case(Action.putTodo, (state, payload) => ({
    todoList: state.todoList.map(t => t.id === payload.id ? {...payload} : t)
  }))
  .case(Action.initTodo, () => ({...init}))