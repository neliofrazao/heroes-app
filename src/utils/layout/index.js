import React from 'react'
import PropTypes from 'prop-types'

const Layout = ({ children }) => <div data-testid="data-layout">{children}</div>

Layout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Layout
