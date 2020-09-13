/**
 * AppRouter
 * ルーティング（画面遷移）
 */
import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Provider} from 'react-redux'

// Screens
import {
  HomeScreen,
  CalendarScreen,
  LogScreen,
  ConfigScreen,
} from '@screens'

// Element
import {HeaderNav} from '@domain/element'

// Utils
import Page from '@utils/Page'
import {LocalStorage} from '@utils/localStorage'

// Services
import {PATH_PAGES} from '@services/pages'

// Store
import store from '@redux/store'

export default () => (
  <Provider store={store}>
    <LocalStorage />
    <BrowserRouter>
      <HeaderNav />
      <Switch>
        <Route
          exact
          path={PATH_PAGES.HOME}
          render={() => <Page title='Todo' children={<HomeScreen />}/> }
        />
        <Route
          path={PATH_PAGES.CALENDAR}
          render={() => <Page title='カレンダー' children={<CalendarScreen />}/> }
        />
        <Route
          path={PATH_PAGES.LOG}
          render={() => <Page title='操作履歴' children={<LogScreen />}/> }
        />
        <Route
          path={PATH_PAGES.CONFIG}
          render={() => <Page title='設定' children={<ConfigScreen />}/> }
        />
      </Switch>
    </BrowserRouter>
  </Provider>
)