import {reducerWithInitialState} from 'typescript-fsa-reducers'

// Actions ------------------------------------------------------------
import Action from './actions'
// --------------------------------------------------------------------

// Entity -------------------------------------------------------------
import {Todos} from '@entity/todo'
// --------------------------------------------------------------------

const init: Todos = {
  todo: []
}

export default reducerWithInitialState(init)
  .case(Action.addTodo, (state, payload) => ({
    ...state,
    todos: [...state.todo, payload]
  }))