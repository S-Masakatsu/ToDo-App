import {combineReducers} from 'redux'

// Reducer
import logReducer  from './log/reducer'
import todoReducer from './todo/reducer'

// RootState
import {RootState} from '@entity/rootState'

export default combineReducers<RootState>({
  todo: todoReducer,
  log: logReducer
})