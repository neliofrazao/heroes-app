import React from 'react'
import PropTypes from 'prop-types'
import { Paper } from '@material-ui/core'
import Container from '../../../Shared/Container'
import Shell from './Main.styles'

const Main = ({ children }) => (
  <Shell>
    <Container>
      <Paper>{children}</Paper>
    </Container>
  </Shell>
)

Main.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Main
