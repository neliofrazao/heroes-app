import React from 'react'
import PropTypes from 'prop-types'
import { Button, ListItem } from '@material-ui/core'
import NavLink from '../../Shared/NavLink'

const MenuItem = ({ children, link, title, ...props }) => (
  <ListItem {...props}>
    <Button
      component={NavLink}
      to={link}
      title={title}
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
  title: PropTypes.string,
  children: PropTypes.string.isRequired,
}

MenuItem.defaultProps = {
  title: '',
}

export default MenuItem
