import {reducerWithInitialState} from 'typescript-fsa-reducers'

// Actions ------------------------------------------------------------
import Action from './actions'
// --------------------------------------------------------------------

// Entity -------------------------------------------------------------
import {Logs} from '@entity/log'
// --------------------------------------------------------------------

const init: Logs = {
  log: []
}

export default reducerWithInitialState(init)
  .case(Action.addOperationLog, (state, payload) => ({
    ...state,
    logs: [...state.log, payload]
  }))