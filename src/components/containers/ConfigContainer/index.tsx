/**
 * CalendarContainer
 */
import React, {useMemo, useState} from 'react'
import {useDispatch} from 'react-redux'

// Redux Action
import todoAction from '@redux/todo/actions'
import logAction  from '@redux/log/actions'

// Components
import {ConfigDeleteObject} from '@domain/object'

// Entity
import {typeDeleteConfirmOpen} from '@entity/config'

// Services
import {DELETE_LIST} from '@services/config'

// Utils
import createMergeProps from '@utils/createMergeProps'


/**
 * Config Delete Container
 */
type typeDelete = 'todo' | 'log' | 'all'

export const ConfigDeleteContainer:React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [hasDelete, setHasDelete] = useState<typeDelete>('todo')

  const [item, setTitle] = useState<string>(DELETE_LIST.TODO.TITLE)
  useMemo(() => {
    setTitle(`${
      hasDelete === 'todo' ? DELETE_LIST.TODO.TITLE :
      hasDelete === 'log' ? DELETE_LIST.LOG.TITLE : DELETE_LIST.ALL.TITLE}します`)
  }, [hasDelete])

  const handleOpen: typeDeleteConfirmOpen = type => {
    setHasDelete(type)
    setOpen(true)
  }
  const dispatch = useDispatch()
  const props = createMergeProps({
    open,
    handleOpen,
    confirm: {
      item,
      onCansell: () => setOpen(false),
      onSuccess: () => {
        if(hasDelete === 'todo') dispatch(todoAction.initTodo())
        if(hasDelete === 'log') dispatch(logAction.initOperationLog())
        if(hasDelete === 'all') {
          dispatch(todoAction.initTodo())
          dispatch(logAction.initOperationLog())
        }
        setOpen(false)
      }
    },
  })

  return <ConfigDeleteObject {...props} />
}