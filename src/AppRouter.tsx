/**
 * AppRouter
 * ルーティング（画面遷移）
 */
import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {Provider} from 'react-redux'

// Screens
import Home from '@components/screens/Home'

// Store
import store from '@redux/store'

export default () => (
  <Provider store={store}>
    <BrowserRouter>
      <Route exact path='/' component={Home} />
    </BrowserRouter>
  </Provider>
)