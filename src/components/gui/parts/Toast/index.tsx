/**
 * トースト
 * Toast GUI Parts Component
 * @open 表示・非表示
 * @handleClose 閉じるイベント
 * @severity アラートの重要度
 * @message 表示メッセージ
 * @color 色
 */
import React  from 'react'

// utils
import {typeAlert} from '@utils/alert'

// Material-UI
import {makeStyles} from '@material-ui/core/styles'
import Alert    from '@material-ui/lab/Alert'
import Snackbar from '@material-ui/core/Snackbar'

interface StyledProps {
  color?: typeAlert
}

interface Props extends StyledProps {
  open: boolean
  handleClose: React.EffectCallback
  severity?: typeAlert
  message?: string
}

const useStyles = makeStyles(() => ({
  bar: {
    bottom: 'auto',
    top: 0,
    margin: '0 aunto',
  },
  alert: {
    width: '100%',
    margin: '0 auto'
  }
}))

export const Toast:React.FC<Props> = ({open, handleClose, severity, color, message}) => {
  const classes = useStyles()
  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} className={classes.bar}>
      <Alert severity={severity} color={color} className={classes.alert}>
        {message || 'This is a success alert'}
      </Alert>
    </Snackbar>
  )
}