import React, { useState, useMemo, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom'
import RouteLoader from './utils/RouteLoader'
import Layout from './utils/Layout'
import LoadContext from './Shared/Loading/store'

const HeroList = withRouter(lazy(() => import('./Pages/HeroList')))
const HeroDetail = withRouter(lazy(() => import('./Pages/HeroDetail')))

const Routes = () => {
  const [isLoad, setIsLoad] = useState(false)
  const provideLoad = useMemo(() => ({ isLoad, setIsLoad }), [isLoad, setIsLoad])

  return (
    <Router>
      <Suspense fallback={<RouteLoader />}>
        <LoadContext.Provider value={provideLoad}>
          <Layout>
            <Switch>
              <Route path="/" exact component={HeroList} />
              <Route path="/hero/:heroId" exact component={HeroDetail} />
            </Switch>
          </Layout>
        </LoadContext.Provider>
      </Suspense>
    </Router>
  )
}

export default Routes
