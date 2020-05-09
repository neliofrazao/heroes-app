import React from 'react'
import Head from './Header.styles'
import logo from '../../assets/images/marvel.jpg'

const Header = () => (
  <Head data-testid="data-header">
    <img src={logo} alt="Logo" />
  </Head>
)

export default Header
