import {reducerWithInitialState} from 'typescript-fsa-reducers'

// Actions
import Action from './actions'

// Entity
import {TodoList} from '@entity/todo'

const init: TodoList = {
  todoList: []
}

export default reducerWithInitialState(init)
  .case(Action.addTodo, (state, payload) => ({
    todoList: [...state.todoList, payload]
  }))
  .case(Action.doneTodo, (state, id) => ({
    todoList: state.todoList.map(t => t.id === id ? {...t, done: !t.done} : t)
  }))