import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

const injectRouter = (
  Component,
  { route = '/', history = createMemoryHistory({ initialEntries: [route] }) } = {},
) => <Router history={history}>{Component}</Router>

export default injectRouter
