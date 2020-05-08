import React from 'react'
import PropTypes from 'prop-types'
import GlobalStyle from './Layout.styles'

const Layout = ({ children }) => (
  <>
    <div data-testid="data-layout">{children}</div>
    <GlobalStyle />
  </>
)

Layout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Layout
