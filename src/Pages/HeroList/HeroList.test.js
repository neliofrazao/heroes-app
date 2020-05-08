import React from 'react'
import { render } from '@testing-library/react'
import HeroList from './index'

describe('HeroList()', () => {
  test('should render hero list component ', () => {
    const { getByTestId } = render(<HeroList />)
    expect(getByTestId('data-hero-list')).toBeDefined()
  })
})
