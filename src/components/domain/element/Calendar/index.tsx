/**
 * Calendar
 * Calendar Domain Element Component
 */
import React  from 'react'
import {useSelector} from 'react-redux'
import styled from 'styled-components'
import dayjs  from 'dayjs'

// Components
import {CalendarElement} from '@gui/parts'
import {LayoutBox, LayoutFlex, LayoutGrid} from '@layouts'

// Entity
import {typeCalendarState, typeCalendarDay, typeCalendar, typeWeek} from '@entity/calendar'
import {typeFormOpen} from '@entity/todo'
import {typeRootState} from '@entity/rootState'

// Serives
import {createCalendar, formatDate, isSameDay, isSameMonth} from '@services/calendar'

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
 * Schedule
 */
interface SchedulesProps {
  date:         typeCalendarDay
  scheduleOpen: (resID: number) => void
}

const Schedules:React.FC<SchedulesProps> = ({date, scheduleOpen}) => {
  const todo = useSelector((state: typeRootState) => state.todo.todoList)
  const _date = formatDate(date)
  const schedules = todo.filter(i => i.date === _date)
  if(schedules.length === 0) return <></>

  return (
    <LayoutBox width='90%' hasCenter={true}>
      {schedules.map(s => 
        <StyledSchedule key={s.id} onClick={() => scheduleOpen(s.id)} >
          {s.title}
        </StyledSchedule>  
      )}
    </LayoutBox>
  )
}
const StyledSchedule = styled.li`
  background-color: rgb(121, 134, 203);
  color: #fff;
  border-radius: 4px;
  font-size: 10px;
  padding: 1px 3px;
  margin: 1px 0;
  cursor: pointer;
  &:not(:last-of-type) {
    margin-bottom: 3px
  }
`


/**
 * Calendar Component
 */
interface Props {
  calendar:     typeCalendarState
  navigation: {
    previous:   (res: React.BaseSyntheticEvent) => void,
    next:       (res: React.BaseSyntheticEvent) => void
  }
  handleOpen:   typeFormOpen
  scheduleOpen: (resID: number) => void
}

export const CalendarBord:React.FC<Props> = ({calendar, navigation, handleOpen, scheduleOpen}) => {
  const today = dayjs()
  const days: typeCalendar = createCalendar(calendar)
  return (
    <>
      <Navigation {...navigation} calendar={calendar} />
      <StyledCalendar>
        <LayoutGrid {...LAYOUT_CALENDAR} >
          <Week />
          {days.map(c =>
            <div key={c.toISOString()} onClick={() => handleOpen(c)}>
              <CalendarElement
                day={c}
                isToday={isSameDay(c, today)}
                isCurrentMonth={isSameMonth(c, dayjs(`${calendar.year}-${calendar.month}`))}
                schedules={
                  <Schedules date={c}  scheduleOpen={scheduleOpen} />
                }
              /> 
            </div>
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