import React from 'react'
import { render, screen } from '@testing-library/react'
import injectRouter from '../../helpers/testHelpers'
import MenuItem from './MenuItem'

const BaseRender = () => (
  <>
    <MenuItem link="/hero" title="item menu">
      Home
    </MenuItem>
    <MenuItem link="/busca" title="item menu">
      Busca
    </MenuItem>
  </>
)

describe('Menu()', () => {
  test('should render menuItem component ', () => {
    render(injectRouter(<BaseRender />))
    const menuItems = screen.getAllByRole('button').length

    expect(menuItems).toBe(2)
  })
})
