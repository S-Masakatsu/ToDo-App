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
import {
  ListAlt   as ListAltIcon,
  History   as HistoryIcon,
  DateRange as DateRangeIcon,
  Settings  as SettingsIcon,
} from '@material-ui/icons'

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
  {
    divider: true
  },
  {
    primary: MAIN_PAGES.CONFIG,
    icon: <SettingsIcon />,
    to: PATH_PAGES.CONFIG,
  },
]

export const HeaderNav = () => <NavBar listItems={PAGES} />