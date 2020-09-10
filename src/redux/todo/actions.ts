import actionCreatorFactory from 'typescript-fsa'

// ActionType ---------------------------------------------------------
import {Type} from './actionTypes'
// --------------------------------------------------------------------

// Entity -------------------------------------------------------------
import {typeTodo} from '@entity/todo'
// --------------------------------------------------------------------

const actionCreator = actionCreatorFactory()

export default {
  addTodo:    actionCreator<typeTodo>(Type.ADD_TODO),
  doneTodo:   actionCreator<number>(Type.DONE_TODO),
  deleteTodo: actionCreator<number>(Type.DELETE_TODO),
}