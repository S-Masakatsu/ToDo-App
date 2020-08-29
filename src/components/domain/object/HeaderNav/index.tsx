/**
 * ヘッダーナビゲーション
 * Navigation Domain Object Component
 */
import React from 'react'

// Components
import {NavBar} from '@gui/parts'

// Entity
import {Pages} from '@entity/navigation'

// Services
import {MAIN_PAGES, PATH_PAGES} from '@services/pages'

// Material-UI
import ListAltIcon   from '@material-ui/icons/ListAlt'
import HistoryIcon   from '@material-ui/icons/History'
import DateRangeIcon from '@material-ui/icons/DateRange'

const PAGES: Pages = [
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