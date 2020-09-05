/**
 * Log
 * Log Domain Element Component
 */
import React from 'react'

// Components
import {Table} from '@gui/parts'

// Entity
import {TableLog} from '@entity/log'

// Constants
const HEADERS: string[] = [
  '操作時刻',
  '操作内容'
]

interface Props {
  logs: TableLog[]
}

export const Log:React.FC<Props> = ({logs}) => (
  <Table headers={HEADERS} bodys={logs} tdNotfirstLeft={true} />
)