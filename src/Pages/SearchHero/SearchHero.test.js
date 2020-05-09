import React from 'react'
import { render } from '@testing-library/react'
import SearchHero from './index'

describe('HeroList()', () => {
  test('should render SearchHero component ', () => {
    const { getByTestId } = render(<SearchHero />)

    expect(getByTestId('data-search-hero')).toBeDefined()
  })
})
