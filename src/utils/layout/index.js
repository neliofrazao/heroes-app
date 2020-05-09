import React from 'react'
import PropTypes from 'prop-types'
import Header from '../../Components/Header'
import GlobalStyle from './Layout.styles'

const Layout = ({ children }) => (
  <>
    <div data-testid="data-layout">
      <Header />
      <main>{children}</main>
    </div>
    <GlobalStyle />
  </>
)

Layout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Layout
