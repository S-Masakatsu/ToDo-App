/**
 * Calendar
 * Calendar Domain Element Component
 */
import React  from 'react'
import styled from 'styled-components'

// Components
import {CalendarElement} from '@gui/parts'
import {LayoutGrid} from '@layouts'

// Entity
import {typeCalendarState, typeCalendar, typeWeek} from '@entity/calendar'

// Serives
import {createCalendar} from '@services/calendar'

// assets
import {calendarBorder} from '@assets/js/variables'

// Constants
const WEEK: typeWeek[] = ['日', '月', '火', '水', '木', '金', '土']
const LAYOUT_CALENDAR = {
  tmpCol: 'repeat(7, 1fr)', // 7days
  tmpRow: 'none',
}


/**
 * Week Component
 */
const Week:React.FC = () => (
  <>
    {WEEK.map(w => 
      <StyledWeek key={w}>
        {w}
      </StyledWeek>
    )}
  </>
)

interface StyledWeekProps {
  children: typeWeek
}
const StyledWeek = styled.div<StyledWeekProps>`
  color: rgba(0, 0, 0, 0.54);
  font-weight: bold;
  border-right: ${calendarBorder};
  border-bottom: ${calendarBorder};
  padding: 3px 0;
  text-align: center;

  ${(props: StyledWeekProps) => {
    if(props.children === '土') return `color: rgb(108, 155, 210);`
    if(props.children === '日') return `color: rgb(255, 77, 77);`
  }}
`


/**
 * Calendar Component
 */
interface Props {
  calendar: typeCalendarState
}

export const CalendarBord:React.FC<Props> = ({calendar}) => {
  const days: typeCalendar = createCalendar(calendar)
  return (
    <StyledCalendar>
      <LayoutGrid {...LAYOUT_CALENDAR} >
        <Week />
        {days.map(c => 
          <CalendarElement key={c.toISOString()} day={c} /> 
        )}
      </LayoutGrid>
    </StyledCalendar>
  )
}

const StyledCalendar = styled.div`
  border-left: ${calendarBorder};
  border-top: ${calendarBorder};
`