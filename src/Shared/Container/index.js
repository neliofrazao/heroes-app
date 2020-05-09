import React from 'react'
import PropTypes from 'prop-types'
import Shell from './Container.styles'

const Container = ({ children }) => <Shell>{children}</Shell>

Container.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Container
