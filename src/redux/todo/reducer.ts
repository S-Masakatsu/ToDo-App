import {reducerWithInitialState} from 'typescript-fsa-reducers'

// Actions ------------------------------------------------------------
import Action from './actions'
// --------------------------------------------------------------------

// Entity -------------------------------------------------------------
import {Todo} from '@entity/todo'
// --------------------------------------------------------------------

const init: Todo = {
  todo: [],
  isDialogOpen: false
}

export default reducerWithInitialState(init)
  .case(Action.addTodo, (state, payload) => ({
    ...state,
    todos: [...state.todo, payload]
  }))