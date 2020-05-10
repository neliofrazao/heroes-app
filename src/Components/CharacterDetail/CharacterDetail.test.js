import React from 'react'
import { render, screen } from '@testing-library/react'
import injectRouter from '../../helpers/testHelpers'
import CharacterDetail from './index'

const BaseRender = () => (
  <CharacterDetail
    characterName="some name"
    characterDescription="some text"
    thumbnailPath="image.jpg"
  />
)

describe('Card()', () => {
  test('should render CharacterDetail component', () => {
    const { getByTestId } = render(injectRouter(<BaseRender />))
    expect(getByTestId('data-Character-detail')).toBeDefined()
  })

  test('should show h2 tag with right value ', () => {
    render(injectRouter(<BaseRender />))
    const SUT = screen.getByText('some name').innerHTML

    expect(SUT).toBe('some name')
  })

  test('should show p tag with right value ', () => {
    render(injectRouter(<BaseRender />))
    const SUT = screen.getByText('some text').innerHTML

    expect(SUT).toBe('some text')
  })
})
