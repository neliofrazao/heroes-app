import React from 'react'
import { render } from '@testing-library/react'
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
})
