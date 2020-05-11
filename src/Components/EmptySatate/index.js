import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import Container from './EmptySatate.styles'

const EmptySatate = () => (
  <Container>
    <Grid container justify="center" alignItems="center">
      <Typography variant="body1" gutterBottom>
        Esse heroi ainda não foi criado!
      </Typography>
    </Grid>
  </Container>
)
export default EmptySatate
