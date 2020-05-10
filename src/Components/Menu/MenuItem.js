import React from 'react'
import PropTypes from 'prop-types'
import { ListItem } from '@material-ui/core'
import ButtonLink from '../../Shared/ButtonLink'

const MenuItem = ({ children, link, title, ...props }) => (
  <ListItem {...props}>
    <ButtonLink link={link} title={title}>
      {children}
    </ButtonLink>
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
