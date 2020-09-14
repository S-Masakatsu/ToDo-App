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
import {Toast} from '@gui/parts'

// Entity
import {typeDeleteConfirmOpen} from '@entity/config'

// Services
import {DELETE_LIST} from '@services/config'

// Utils
import createMergeProps from '@utils/createMergeProps'
import {useAlert, typeUseAlert} from '@utils/alert'


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
        if(hasDelete === 'todo' && setMessage) {
          dispatch(todoAction.initTodo())
          setMessage('ToDoをすべて削除しました。')
        }
        if(hasDelete === 'log' && setMessage) {
          dispatch(logAction.initOperationLog())
          setMessage('操作履歴をすべて削除しました。')
        }
        if(hasDelete === 'all' && setMessage) {
          dispatch(todoAction.initTodo())
          dispatch(logAction.initOperationLog())
          setMessage('すべての記録を削除しました。')
        }
        setOpen(false)
        if(handleAlertOpen) handleAlertOpen('削除')
      }
    },
  })

  // Toast Custom Hooks
  const {
    open: alertOpen,
    color,
    severity,
    message,
    setMessage,
    handleOpen: handleAlertOpen,
    handleClose: handleAlertClose,
  } = useAlert()
  const alert: typeUseAlert = createMergeProps({
    open: alertOpen,
    message,
    severity,
    color,
    handleClose: handleAlertClose
  })

  return (
    <>
      <ConfigDeleteObject {...props} />
      <Toast {...alert} />
    </>
  )
}