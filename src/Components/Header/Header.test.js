import React from 'react'
import { render } from '@testing-library/react'
import Header from './index'

describe('Layout()', () => {
  test('should render Header component ', () => {
    const { getByTestId } = render(<Header />)
    expect(getByTestId('data-header')).toBeDefined()
  })
})
