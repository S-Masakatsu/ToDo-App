import thunk from 'redux-thunk'
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'
import rootReducer from './rootReducers'

export default createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
)