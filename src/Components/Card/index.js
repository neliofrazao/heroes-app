import React from 'react'
import PropTypes from 'prop-types'
import { CardActions, CardContent, CardMedia, Typography } from '@material-ui/core'
import ButtonLink from '../../Shared/ButtonLink'
import DataCard from './Card.styles'

const Card = ({ imgUrl, name, link }) => (
  <DataCard>
    <CardMedia image={imgUrl} title={name} />
    <CardContent>
      <Typography gutterBottom variant="h6" component="h2">
        {name}
      </Typography>
    </CardContent>
    <CardActions>
      <ButtonLink size="small" color="primary" variant="contained" link={link} title={name}>
        Perfil do personagem
      </ButtonLink>
    </CardActions>
  </DataCard>
)

Card.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export default Card
