import React from 'react'
import { render, screen } from '@testing-library/react'
import injectRouter from '../../helpers/testHelpers'
import Card from './index'

const BaseRender = () => <Card imgUrl="/image" name="char" link="/link" data-testid="data-card" />

describe('Card()', () => {
  test('should show title with right value ', () => {
    render(injectRouter(<BaseRender />))
    const SUT = screen.getByRole('button').getAttribute('title')

    expect(SUT).toBe('char')
  })

  test('should show link with right value ', () => {
    render(injectRouter(<BaseRender />))
    const SUT = screen.getByRole('button').getAttribute('href')

    expect(SUT).toBe('/link')
  })
})
