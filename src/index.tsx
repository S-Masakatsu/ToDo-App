import React     from 'react'
import ReactDOM  from 'react-dom'
import AppRouter from './AppRouter'

import * as serviceWorker from './serviceWorker'

import '@assets/css/_base.sass'

import dayjs from 'dayjs'
import 'dayjs/locale/ja'
dayjs.locale('ja')

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();