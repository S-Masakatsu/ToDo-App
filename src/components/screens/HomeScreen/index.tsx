/**
 * ホーム画面
 * Home Screen
 */
import React from 'react'

// Components
import {ScreenWrapper} from '@gui/parts'
import {TodoListContainer, TodoEditContainer} from '@containers'

export const HomeScreen:React.FC = () => (
  <ScreenWrapper>
    <TodoListContainer />
    <TodoEditContainer />
  </ScreenWrapper>
)