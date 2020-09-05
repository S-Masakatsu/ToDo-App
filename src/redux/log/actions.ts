import actionCreatorFactory from 'typescript-fsa'

// ActionType ---------------------------------------------------------
import {Type} from './actionTypes'
// --------------------------------------------------------------------

// Entity -------------------------------------------------------------
import {typeLog} from '@entity/log'
// --------------------------------------------------------------------

const actionCreator = actionCreatorFactory()

export default {
  addOperationLog: actionCreator<typeLog>(Type.LOG_OPERATION_ADD)
}