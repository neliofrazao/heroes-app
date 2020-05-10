import React from 'react'
import { render, screen } from '@testing-library/react'
import injectRouter from '../../helpers/testHelpers'
import Card from './index'

const BaseRender = () => <Card imgUrl="/image" name="char" link="/link" />

describe('Card()', () => {
  test('should show title with right value ', () => {
    render(injectRouter(<BaseRender />))
    const getTitile = screen.getByRole('button').getAttribute('title')

    expect(getTitile).toBe('char')
  })
})
