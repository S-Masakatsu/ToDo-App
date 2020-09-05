/**
 * Log
 * Log Domain Object Component
 */
import React from 'react'

// Components
import {Layout, LayoutBox} from '@layouts'
import {Log} from '@domain/element'

// Entity
import {typeTableLog} from '@entity/log'

interface Props {
  logs: typeTableLog[]
}

export const LogList:React.FC<Props> = props => (
  <Layout>
    <LayoutBox maxWidth='800px' hasCenter={true} >
      <Log {...props} />
    </LayoutBox>
  </Layout>
)