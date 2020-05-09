import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom'
import RouteLoader from './utils/RouteLoader'
import Layout from './utils/Layout'

const HeroList = withRouter(lazy(() => import('./Pages/HeroList')))
const HeroDetail = withRouter(lazy(() => import('./Pages/HeroDetail')))
const SearchHero = withRouter(lazy(() => import('./Pages/SearchHero')))

const Routes = () => (
  <Router>
    <Suspense fallback={<RouteLoader />}>
      <Layout>
        <Switch>
          <Route path="/" exact component={HeroList} />
          <Route path="/hero" exact component={HeroDetail} />
          <Route path="/search" exact component={SearchHero} />
        </Switch>
      </Layout>
    </Suspense>
  </Router>
)

export default Routes
