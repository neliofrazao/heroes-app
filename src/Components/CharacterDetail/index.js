import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography } from '@material-ui/core'
import CharacterContainer from './CharacterDetail.styles'

const CharacterDetail = ({ characterName, characterDescription, thumbnailPath }) => (
  <CharacterContainer data-testid="data-Character-detail">
    <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={3}>
      <Grid item xs={3}>
        <div className="character-image">
          <img src={thumbnailPath} alt={characterName} />
        </div>
      </Grid>
      <Grid item md={9}>
        <Typography gutterBottom variant="h3" component="h2">
          {characterName}
        </Typography>
        <Typography gutterBottom variant="body1">
          {characterDescription}
        </Typography>
      </Grid>
    </Grid>
  </CharacterContainer>
)

CharacterDetail.propTypes = {
  characterName: PropTypes.string.isRequired,
  characterDescription: PropTypes.string.isRequired,
  thumbnailPath: PropTypes.string.isRequired,
}

export default CharacterDetail
