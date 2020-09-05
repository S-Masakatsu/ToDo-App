import thunk from 'redux-thunk'
import {
  createStore,
  applyMiddleware,
} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './rootReducers'
import {initialState} from './initialState'

const middlewares = [thunk]

const enhancer = process.env.NODE_ENV === 'development' ?
  composeWithDevTools(applyMiddleware(...middlewares)) : applyMiddleware(...middlewares)

export default createStore(
  rootReducer,
  initialState,
  enhancer
)