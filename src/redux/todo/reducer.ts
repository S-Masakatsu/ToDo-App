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
    ...state,
    todoList: [...state.todoList, payload]
  }))