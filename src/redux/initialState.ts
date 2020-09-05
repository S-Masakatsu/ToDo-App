// Entity
import {RootState} from '@entity/rootState'

// Utils
import {APP_KEY} from '@utils/localStorage'

const _state = localStorage.getItem(APP_KEY)

export const initialState: RootState = _state ? JSON.parse(_state) : {
  todo: {
    todoList: []
  },
  log: {
    logList: []
  }
}