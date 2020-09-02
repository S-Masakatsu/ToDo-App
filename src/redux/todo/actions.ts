import actionCreatorFactory from 'typescript-fsa'

// ActionType ---------------------------------------------------------
import {Type} from './actionTypes'
// --------------------------------------------------------------------

// Entity -------------------------------------------------------------
import {Todo} from '@entity/todo'
// --------------------------------------------------------------------

const actionCreator = actionCreatorFactory()

export default {
  addTodo: actionCreator<Todo>(Type.ADD_TODO),
  doneTodo: actionCreator<number>(Type.DONE_TODO),
}