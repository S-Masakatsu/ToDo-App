import {combineReducers} from 'redux'

// Reducer
import logReducer  from './log/reducer'
import todoReducer from './todo/reducer'

// RootState
import {typeRootState} from '@entity/rootState'

export default combineReducers<typeRootState>({
  todo: todoReducer,
  log: logReducer
})