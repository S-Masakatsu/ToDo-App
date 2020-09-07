/**
 * Calendar
 * Calendar Domain Element Component
 */
import React  from 'react'
import styled from 'styled-components'
import dayjs  from 'dayjs'

// Components
import {CalendarElement} from '@gui/parts'
import {LayoutFlex, LayoutGrid} from '@layouts'

// Entity
import {typeCalendarState, typeCalendar, typeWeek} from '@entity/calendar'

// Serives
import {createCalendar, isSameDay, isSameMonth} from '@services/calendar'

// assets
import {calendarBorder} from '@assets/js/variables'

// Material-UI
import {IconButton}    from '@material-ui/core'
import ArrowBackIos    from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos'

// Constants
const WEEK: typeWeek[] = ['日', '月', '火', '水', '木', '金', '土']
const LAYOUT_CALENDAR = {
  tmpCol: 'repeat(7, 1fr)', // 7days
  tmpRow: 'none',
}


/**
 * Navigation
 */
interface NavigationProps {
  calendar: typeCalendarState
  previous: (res: React.BaseSyntheticEvent) => void,
  next:     (res: React.BaseSyntheticEvent) => void
}

const Navigation:React.FC<NavigationProps> = ({calendar, previous, next}) => (
  <StyledHeader>
    <LayoutFlex justify={'center'}>
      <IconButton size='small' onClick={previous}>
        <ArrowBackIos />
      </IconButton>
      <StyledThis>
        {`${calendar.year}年${calendar.month}月`}
      </StyledThis>
      <IconButton size='small' onClick={next}>
        <ArrowForwardIos />
      </IconButton>
    </LayoutFlex>
  </StyledHeader>
)

const StyledHeader = styled.div`
  margin-bottom: 8px;
`

const StyledThis = styled.h1`
  color: rgba(0, 0, 0, 0.54);
  font-size: 1.5rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  line-height: 1.334;
  text-align: center;
  width: ${window.innerWidth / 2}px;
  letter-spacing: 0em;
`


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
  navigation: {
    previous: (res: React.BaseSyntheticEvent) => void,
    next:     (res: React.BaseSyntheticEvent) => void
  }
}

export const CalendarBord:React.FC<Props> = ({calendar, navigation}) => {
  const today = dayjs()
  const days: typeCalendar = createCalendar(calendar)
  return (
    <>
      <Navigation {...navigation} calendar={calendar} />
      <StyledCalendar>
        <LayoutGrid {...LAYOUT_CALENDAR} >
          <Week />
          {days.map(c => 
            <CalendarElement
              key={c.toISOString()}
              day={c}
              isToday={isSameDay(c, today)}
              isCurrentMonth={isSameMonth(c, dayjs(`${calendar.year}-${calendar.month}`))}
            /> 
          )}
        </LayoutGrid>
      </StyledCalendar>
    </>
  )
}

const StyledCalendar = styled.div`
  border-left: ${calendarBorder};
  border-top: ${calendarBorder};
`