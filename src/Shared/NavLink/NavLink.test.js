import React from 'react'
import { render } from '@testing-library/react'
import { injectRouter } from '../../helpers/testHelpers'
import NavLink from './index'

const BaseRender = () => (
  <NavLink to="/hero" title="some link" data-testid="data-nav-link">
    Some Link
  </NavLink>
)

describe('NavLink()', () => {
  test('should href to equal a "/hero"', () => {
    const { getByTestId } = render(injectRouter(<BaseRender />))
    const SUT = getByTestId('data-nav-link').getAttribute('href')

    expect(SUT).toEqual('/hero')
  })

  test('should title to equal a "Some Link"', () => {
    const { getByTestId } = render(injectRouter(<BaseRender />))
    const SUT = getByTestId('data-nav-link').getAttribute('title')

    expect(SUT).toEqual('some link')
  })
})
