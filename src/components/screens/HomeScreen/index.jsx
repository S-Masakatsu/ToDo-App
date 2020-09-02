/**
 * ホーム画面
 * Home Screen
 */
import React from 'react'

// Components
import {ScreenWrapper} from '@gui/parts'
import {TodoEditContainer} from '@containers'

export const HomeScreen = () => (
  <ScreenWrapper>
    <TodoEditContainer />
  </ScreenWrapper>
)