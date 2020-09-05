import {typeTodoState} from '@entity/todo'
import {typeLogState}  from '@entity/log'

export type typeRootState = {
  todo: typeTodoState,
  log:  typeLogState,
}