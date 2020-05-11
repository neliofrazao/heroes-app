import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'

const EmptySatate = () => (
  <Paper className="phone-detail">
    <Grid container justify="center" alignItems="center">
      <Typography variant="body1" gutterBottom>
        Esse heroi ainda não foi criado!
      </Typography>
    </Grid>
  </Paper>
)
export default EmptySatate
