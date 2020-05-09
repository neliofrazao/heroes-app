import React from 'react'
import PropTypes from 'prop-types'
import Header from '../../Components/Header'
import GlobalStyle from './Layout.styles'

const Layout = ({ children }) => (
  <>
    <Header />
    <div data-testid="data-layout">{children}</div>
    <GlobalStyle />
  </>
)

Layout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Layout
