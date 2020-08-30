/**
 * ホーム画面
 * Home Screen
 */
import React from 'react'

// Components
import {ScreenWrapper} from '@gui/parts'
import {TodoForm} from '@domain/object'

export const HomeScreen = () => (
  <ScreenWrapper>
    <TodoForm />
  </ScreenWrapper>
)