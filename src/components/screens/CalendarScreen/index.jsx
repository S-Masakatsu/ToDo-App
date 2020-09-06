/**
 * カレンダー画面
 * CalendarScreen Screen
 */
import React from 'react'

// Components
import {ScreenWrapper} from '@gui/parts'
import {Calendar} from '@domain/element'
import {useWindowDimensions} from '@utils/windowDimensions'

export const CalendarScreen = () => {
  const {width} = useWindowDimensions()

  return (
    <ScreenWrapper hasPadding={600 < width}>
      <Calendar />
    </ScreenWrapper>
  )
}