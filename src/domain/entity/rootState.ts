import {Todos} from '@entity/todo'
import {Logs}  from '@entity/log'

export type RootState = {
  todo: Todos,
  log:  Logs
}