import {reducerWithInitialState} from 'typescript-fsa-reducers'

// Actions ------------------------------------------------------------
import Action from './actions'
// --------------------------------------------------------------------

// Entity -------------------------------------------------------------
import {Log} from '@entity/log'
// --------------------------------------------------------------------

const init: Log = {
  log: []
}

export default reducerWithInitialState(init)
  .case(Action.addOperationLog, (state, payload) => ({
    ...state,
    logs: [...state.log, payload]
  }))