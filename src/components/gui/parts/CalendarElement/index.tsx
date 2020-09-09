/**
 * カレンダー Element
 * CalendarElement GUI parts Component
 * @day dayjs
 * @isToday 当日かどうか
 * @isCurrentMonth その月の日にちかどうか
 */
import React  from 'react'
import styled from 'styled-components'

// Entity
import {typeCalendarDay} from '@entity/calendar'

// Services
import {formatDay} from '@services/calendar'

// assets
import {calendarBorder} from '@assets/js/variables'

interface StyledProps {
  isToday?:        boolean
  isCurrentMonth?: boolean
}

interface Props extends StyledProps {
  day:        typeCalendarDay
  onClick?:   (res: React.BaseSyntheticEvent) => void
  schedules?: React.ReactNode
}

export const CalendarElement:React.FC<Props> = ({day, onClick, isCurrentMonth, isToday, schedules}) => (
  <StyledElement {...{onClick}}>
    <StyledDate>
      <StyledToday {...{isCurrentMonth, isToday}}>
        {formatDay(day)}
      </StyledToday>
      {schedules && 
        <StyledSchedules>
          {schedules}
        </StyledSchedules>
      }
    </StyledDate>
  </StyledElement>
)

const StyledElement = styled.div`
  border-right: ${calendarBorder};
  border-bottom: ${calendarBorder};
  height: ${window.innerHeight * 0.02}vh;
`

const StyledDate = styled.div`
  padding: 5px 0;
  height: 24px;
  text-align: center;
`

const StyledSchedules = styled.ul`
  overflow: scroll;
  height: calc(${window.innerHeight * 0.022}vh - 40px);
`

const StyledToday = styled.span`
  color: ${(props: StyledProps) => !props.isCurrentMonth && 'rgba(0, 0, 0, 0.54)'};

  ${(props: StyledProps) => {
    if(!props.isToday) return ''
    return `
      display: inline-block;
      background-color: #1a73e8;
      color: #fff;
      padding: 0 7px;
      border-radius: 50%;
    `
  }}
`