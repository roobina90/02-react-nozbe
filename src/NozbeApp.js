import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Calendar from './Calendar.js'
import Tasks from './Tasks.js'
import MainApp from './MainApp.js'

render(<Router history={browserHistory}>
  <Route path='/' component={MainApp}>
    <IndexRoute component={Tasks} />
    <Route path='/tasks' component={Tasks} />
    <Route path='/calendar' component={Calendar} />
  </Route>
</Router >,
  document.getElementById('app'))
