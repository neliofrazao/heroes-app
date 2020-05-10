import React from 'react'
import { render, wait } from '@testing-library/react'
import HeroList from './index'
import api from '../../api/characters/characters'

describe('HeroList()', () => {
  const response = {
    limit: 20,
    offset: 0,
    results: [
      {
        name: '3-D Man',
        thumbnail: {
          extension: 'jpg',
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
        },
      },
    ],
    total: 1493,
  }
  test('should render hero list component ', () => {
    const { getByTestId } = render(<HeroList />)
    expect(getByTestId('data-hero-list')).toBeDefined()
  })

  test('should api return with right value', async () => {
    api.getCharacters = jest.fn().mockReturnValueOnce(response)

    render(<HeroList />)
    await wait(() => {
      expect(api.getCharacters).toHaveReturnedWith(response)
    })
  })
})
