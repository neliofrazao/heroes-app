import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom'
import RouteLoader from './utils/RouteLoader'
import Layout from './utils/Layout'

const HeroList = withRouter(lazy(() => import('./Pages/HeroList')))

const Routes = () => (
  <Router>
    <Suspense fallback={<RouteLoader />}>
      <Layout>
        <Switch>
          <Route path="/" exact component={HeroList} />
        </Switch>
      </Layout>
    </Suspense>
  </Router>
)

export default Routes
