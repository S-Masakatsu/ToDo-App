import {Todo} from '@entity/todo'
import {Log}  from '@entity/log'

export type RootState = {
  todo: Todo[],
  log:  Log[]
}