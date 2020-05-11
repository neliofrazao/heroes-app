import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Divider, Grid, Typography } from '@material-ui/core'
import Card from '../../Shared/Card'
import SerierContainer from './CharacterDetail.styles'

const SeriesList = ({ seriesInfo }) => (
  <SerierContainer data-testid="data-data-hero">
    <Divider />
    <Typography gutterBottom variant="h3" component="h3">
      Séries
    </Typography>
    <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={3}>
      {seriesInfo.results &&
        seriesInfo.results.length > 1 &&
        seriesInfo.results.map(({ id, title, thumbnail: { path, extension } }) => (
          <Fragment key={id}>
            <Grid item xs={12} md={4} lg={3}>
              <Card imgUrl={`${path}.${extension}`} name={title} link={`/hero/${id}`} />
            </Grid>
          </Fragment>
        ))}
    </Grid>
  </SerierContainer>
)

SeriesList.propTypes = {
  seriesInfo: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.object)])
    .isRequired,
}

export default SeriesList
