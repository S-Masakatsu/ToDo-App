/**
 * LogContainer
 */
import React from 'react'
import {useSelector} from 'react-redux'

// Components
import {LogList} from '@domain/object'

// Entity
import {RootState} from '@entity/rootState'

// Services
import {createStatusLog} from '@services/log'

export const LogListContainer:React.FC = () => {
  const stateLog = useSelector((state: RootState) => state.log.logList)

  const logs = stateLog.map(log => createStatusLog(log)).reverse()
  return <LogList logs={logs} />
}