import React from 'react'
import { render, screen } from '@testing-library/react'
import { injectRouter } from '../../helpers/testHelpers'
import { Menu, MenuItem } from './index'

const BaseRender = () => (
  <Menu>
    <MenuItem link="/hero" title="item menu">
      Home
    </MenuItem>
    <MenuItem link="/busca" title="item menu">
      Busca
    </MenuItem>
  </Menu>
)

describe('Menu()', () => {
  test('should render menu component ', () => {
    const { getByTestId } = render(injectRouter(<BaseRender />))
    expect(getByTestId('data-menu')).toBeDefined()
  })

  test('should render menuItem component with two items ', () => {
    render(injectRouter(<BaseRender />))
    const menuItems = screen.getAllByRole('button').length

    expect(menuItems).toBe(2)
  })
})
