import React from 'react'
import { render } from '@testing-library/react'
import Layout from './index'

const BaseRender = () => (
  <Layout>
    <p data-testid="data-html-elemnt">Some text</p>
  </Layout>
)

describe('Layout()', () => {
  test('should render layout component ', () => {
    const { getByTestId } = render(<BaseRender />)
    expect(getByTestId('data-layout')).toBeDefined()
  })

  test('should render layout component children', () => {
    const { getByTestId } = render(<BaseRender />)
    const SUT = getByTestId('data-html-elemnt').innerHTML

    expect(SUT).toBe('Some text')
  })
})
