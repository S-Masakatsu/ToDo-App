/**
 * Log
 * Log Domain Object Component
 */
import React from 'react'

// Components
import {Layout, LayoutBox} from '@layouts'
import {Log as LogList} from '@domain/element'

// Entity
import {typeTableLog} from '@entity/log'

interface Props {
  logs: typeTableLog[]
}

export const Log:React.FC<Props> = props => (
  <Layout>
    <LayoutBox maxWidth='800px' hasCenter={true} >
      <LogList {...props} />
    </LayoutBox>
  </Layout>
)