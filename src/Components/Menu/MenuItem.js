import React from 'react'
import PropTypes from 'prop-types'
import { Button, ListItem } from '@material-ui/core'
import NavLink from '../../Shared/NavLink'

const MenuItem = ({ children, link, ...props }) => (
  <ListItem {...props}>
    <Button
      component={NavLink}
      to={link}
      activeStyle={{
        fontWeight: 'bold',
      }}
    >
      {children}
    </Button>
  </ListItem>
)

MenuItem.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}

export default MenuItem
