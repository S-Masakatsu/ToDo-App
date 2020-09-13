/**
 * Log
 * Log Domain Element Component
 */
import React  from 'react'
import styled from 'styled-components'

// Components
import {Table} from '@gui/parts'

// Entity
import {typeTableLog} from '@entity/log'

// Constants
const HEADERS: string[] = [
  '操作時刻',
  '操作内容'
]

interface Props {
  logs: typeTableLog[]
}

export const Log:React.FC<Props> = ({logs}) => (
  logs.length === 0 ?
  <StyledText>
    操作履歴がありません
  </StyledText>
  :
  <Table headers={HEADERS} bodys={logs} tdNotfirstLeft={true} />
)

const StyledText = styled.p`
  text-align: center;
  margin-top: 30px;
  font-size: 1rem;
`