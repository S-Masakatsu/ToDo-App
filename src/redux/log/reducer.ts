import {reducerWithInitialState} from 'typescript-fsa-reducers'

// Actions ------------------------------------------------------------
import Action from './actions'
// --------------------------------------------------------------------

// Entity -------------------------------------------------------------
import {typeLogState} from '@entity/log'
// --------------------------------------------------------------------

const init: typeLogState = {
  logList: []
}

export default reducerWithInitialState(init)
  .case(Action.addOperationLog, (state, payload) => ({
    ...state,
    logList: [...state.logList, payload]
  }))
  .case(Action.initOperationLog, () => ({...init}))