import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HeroList from './Pages/HeroList'

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={HeroList} />
    </Switch>
  </Router>
)

export default Routes
