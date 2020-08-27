import actionCreatorFactory from 'typescript-fsa'

// ActionType ---------------------------------------------------------
import {Type} from './actionTypes'
// --------------------------------------------------------------------

// Entity -------------------------------------------------------------
import {Log} from '@entity/log'
// --------------------------------------------------------------------

const actionCreator = actionCreatorFactory()

export default {
  addOperationLog: actionCreator<Log>(Type.LOG_OPERATION_ADD)
}