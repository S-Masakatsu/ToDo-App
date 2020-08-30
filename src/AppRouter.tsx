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
  LogScreen
} from '@screens'

// Element
import {HeaderNav} from '@domain/element'

// Services
import {PATH_PAGES} from '@services/pages'

// Store
import store from '@redux/store'

export default () => (
  <Provider store={store}>
    <BrowserRouter>
      <HeaderNav />
      <Switch>
        <Route path={PATH_PAGES.HOME}     component={HomeScreen} exact />
        <Route path={PATH_PAGES.CALENDAR} component={CalendarScreen} />
        <Route path={PATH_PAGES.LOG}      component={LogScreen} />
      </Switch>
    </BrowserRouter>
  </Provider>
)