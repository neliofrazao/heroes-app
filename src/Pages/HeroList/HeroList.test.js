import React from 'react'
import { render, wait } from '@testing-library/react'
import HeroList from './index'
import api from '../../api/characters/characters'

describe('HeroList()', () => {
  const response = {
    attributionHTML: '<a href="http://marvel.com">Data provided by Marvel. © 2020 MARVEL</a>',
    attributionText: 'Data provided by Marvel. © 2020 MARVEL',
    code: 200,
    copyright: '© 2020 MARVEL',
    data: {
      offset: 0,
      limit: 20,
      total: 1493,
      count: 20,
      results: [
        {
          id: 1,
          name: '3-D Man',
          thumbnail: {
            extension: 'jpg',
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
          },
        },
      ],
    },
    etag: 'eba58984956be48bdfd28818fa4fad1ff5f5cf81',
    status: 'Ok',
  }

  test('should render hero list component ', () => {
    const { getByTestId } = render(<HeroList />)
    expect(getByTestId('data-hero-list')).toBeDefined()
  })

  test('should api return with right', async () => {
    api.getCharacters = jest.fn().mockReturnValueOnce(response)

    render(<HeroList />)
    await wait(() => {
      expect(api.getCharacters).toHaveReturnedWith(response)
    })
  })

  test('should receive error', async () => {
    api.getCharacters = jest.fn().mockRejectedValueOnce({})
    render(<HeroList />)
    await wait(() => {
      expect(api.getCharacters).toHaveBeenCalledTimes(1)
    })
  })
})
