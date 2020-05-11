import React from 'react'
import { render } from '@testing-library/react'
import HeroDetail from './index'

const props = {
  match: {
    params: { heroIdo: '10' },
    path: '',
    url: '',
  },
}

describe('HeroList()', () => {
  test('should render HeroDetail component ', () => {
    const { getByTestId } = render(<HeroDetail {...props} />)

    expect(getByTestId('data-hero-detail')).toBeDefined()
  })
})
