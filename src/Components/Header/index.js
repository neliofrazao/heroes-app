import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { Menu, MenuItem } from '../Menu'
import { Container } from '../../Shared'
import Head from './Header.styles'
import logo from '../../assets/images/marvel.jpg'

const Header = () => (
  <Head data-testid="data-header">
    <Container>
      <Grid container spacing={3} direction="row" justify="flex-start" alignItems="center">
        <Grid item xs={4}>
          <Typography variant="h1" component="h1">
            <img src={logo} alt="Logo" />
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Menu>
            <MenuItem link="/" title="Home">
              Home
            </MenuItem>
          </Menu>
        </Grid>
      </Grid>
    </Container>
  </Head>
)

export default Header
