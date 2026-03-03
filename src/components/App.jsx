import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from '../pages/Main'
import Contact from '../pages/Contact'
import Success from '../pages/Success'
import NotFound from '../pages/NotFound'

function App() {
  return React.createElement(
    BrowserRouter,
    null,
    React.createElement(
      Switch,
      null,
      React.createElement(Route, { exact: true, path: '/', component: Main }),
      React.createElement(Route, { exact: true, path: '/contact', component: Contact }),
      React.createElement(Route, { exact: true, path: '/success', component: Success }),
      React.createElement(Route, { component: NotFound })
    )
  )
}

export default App

