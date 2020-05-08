import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom'
import RouteLoader from './utils/RouteLoader'

const HeroList = withRouter(lazy(() => import('./Pages/HeroList')))

const Routes = () => (
  <Router>
    <Suspense fallback={<RouteLoader />}>
      <Switch>
        <Route path="/" exact component={HeroList} />
      </Switch>
    </Suspense>
  </Router>
)

export default Routes
