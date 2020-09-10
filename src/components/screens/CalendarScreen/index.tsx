/**
 * カレンダー画面
 * CalendarScreen Screen
 */
import React from 'react'

// Components
import {ScreenWrapper} from '@gui/parts'
import {CalendarContainer} from '@containers'
import {useWindowDimensions} from '@utils/windowDimensions'

export const CalendarScreen:React.FC = () => {
  const {width} = useWindowDimensions()

  return (
    <ScreenWrapper hasPadding={600 < width}>
      <CalendarContainer />
    </ScreenWrapper>
  )
}