import React from 'react'
import PropTypes from 'prop-types'
import { CardActions, CardContent, CardMedia, Typography } from '@material-ui/core'
import DataCard from './Card.styles'

const Card = ({ children, imgUrl, name }) => (
  <DataCard>
    <CardMedia image={imgUrl} title={name} />
    <CardContent>
      <Typography gutterBottom variant="h6" component="h2">
        {name}
      </Typography>
    </CardContent>
    <CardActions>{children}</CardActions>
  </DataCard>
)

Card.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.element,
}

Card.defaultProps = {
  children: null,
}

export default Card
