import {reducerWithInitialState} from 'typescript-fsa-reducers'

// Actions ------------------------------------------------------------
import Action from './actions'
// --------------------------------------------------------------------

// Entity -------------------------------------------------------------
import {LogList} from '@entity/log'
// --------------------------------------------------------------------

const init: LogList = {
  logList: []
}

export default reducerWithInitialState(init)
  .case(Action.addOperationLog, (state, payload) => ({
    ...state,
    logs: [...state.logList, payload]
  }))