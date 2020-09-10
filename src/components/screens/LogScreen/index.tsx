/**
 * 操作履歴画面
 * LogScreen Screen
 */
import React from 'react'

// Components
import {ScreenWrapper} from '@gui/parts'
import {LogListContainer} from '@containers'

export const LogScreen:React.FC = () => (
  <ScreenWrapper>
    <LogListContainer />
  </ScreenWrapper>
)