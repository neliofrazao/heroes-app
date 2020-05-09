import React from 'react'
import { render } from '@testing-library/react'
import HeroDetail from './index'

describe('HeroList()', () => {
  test('should render HeroDetail component ', () => {
    const { getByTestId } = render(<HeroDetail />)

    expect(getByTestId('data-hero-detail')).toBeDefined()
  })
})
