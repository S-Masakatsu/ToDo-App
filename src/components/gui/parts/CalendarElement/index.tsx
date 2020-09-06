/**
 * カレンダー Element
 * CalendarElement GUI parts Component
 */
import React  from 'react'
import styled from 'styled-components'
import dayjs  from 'dayjs'

// Entity
import {typeCalendarDay} from '@entity/calendar'

// Services
import {formatDay, isSameDay, isSameMonth} from '@services/calendar'

// assets
import {calendarBorder} from '@assets/js/variables'

// Constants
const TODAY = dayjs()

interface StyledProps {
  isToday?:        boolean
  isCurrentMonth?: boolean
}

interface Props {
  day: typeCalendarDay
}

export const CalendarElement:React.FC<Props> = ({day}) => (
  <StyledElement>
    <StyledDate>
      <StyledToday
        isCurrentMonth={isSameMonth(day, TODAY)}
        isToday={isSameDay(day, TODAY)}
      >
        {formatDay(day)}
      </StyledToday>
    </StyledDate>
  </StyledElement>
)

const StyledElement = styled.div`
  border-right: ${calendarBorder};
  border-bottom: ${calendarBorder};
  height: 14.4vh;
`

const StyledDate = styled.div`
  padding: 5px 0;
  height: 24px;
  text-align: center;
`

const StyledToday = styled.span<StyledProps>`
  color: ${(props: StyledProps) => !props.isCurrentMonth && 'rgba(0, 0, 0, 0.54)'};

  ${(props: StyledProps) => {
    if(!props.isToday) return ''
    return `
      display: inline-block;
      line-height: 24px;
      width: 24px;
      background-color: #1a73e8;
      color: #fff;
      border-radius: 50%;
    `
  }}
`