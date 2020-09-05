/**
 * ヘッダーナビゲーション
 * HeaderNav Domain Element Component
 */
import React from 'react'

// Components
import {NavBar} from '@gui/parts'

// Entity
import {typePages} from '@entity/navigation'

// Services
import {MAIN_PAGES, PATH_PAGES} from '@services/pages'

// Material-UI
import ListAltIcon   from '@material-ui/icons/ListAlt'
import HistoryIcon   from '@material-ui/icons/History'
import DateRangeIcon from '@material-ui/icons/DateRange'

// Constants
const PAGES: typePages = [
  {
    primary: MAIN_PAGES.HOME,
    icon: <ListAltIcon />,
    to: PATH_PAGES.HOME,
  },
  {
    primary: MAIN_PAGES.CALENDAR,
    icon: <DateRangeIcon />,
    to: PATH_PAGES.CALENDAR,
  },
  {
    primary: MAIN_PAGES.LOG,
    icon: <HistoryIcon />,
    to: PATH_PAGES.LOG,
  },
]

export const HeaderNav = () => <NavBar listItems={PAGES} />