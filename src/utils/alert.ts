/**
 * alert custom Hooks
 * alert utils Hook
 */
import {useState} from 'react'

// Entity
import {typeStatus} from '@entity/log'

// Type
export type typeAlert = 'success' | 'info' | 'warning' | 'error'


export type typeUseAlert = {
  open:        boolean
  severity:    typeAlert
  color:       typeAlert
  message?:    string
  setMessage?: (message?: string) => void
  handleOpen?: (type?: typeStatus) => void
  handleClose: React.EffectCallback
}

export const useAlert = (): typeUseAlert => {
  const [open, setOpen] = useState<boolean>(false)
  const [severity, setSeverity] = useState<typeAlert>('info')
  const [color, setColor] = useState<typeAlert>('info')
  const [message, setMessage] = useState<string>()

  const handleOpen = (type?: typeStatus) => {
    if(type === '追加' || type === '完了' || type === '更新') {
      setSeverity('success')
      setColor('success')
    }
    if(type === '削除') {
      setSeverity('success')
      setColor('error')
    }
    setOpen(true)
  }

  const handleClose = () => setOpen(false)
  return {open, severity, color, message, setMessage, handleOpen, handleClose}
}