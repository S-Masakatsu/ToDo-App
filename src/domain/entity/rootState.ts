import {TodoList} from '@entity/todo'
import {LogList}  from '@entity/log'

export type RootState = {
  todo: TodoList,
  log:  LogList
}