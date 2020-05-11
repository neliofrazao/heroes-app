import React from 'react'
import { render, waitForElement } from '@testing-library/react'
import HeroDetail from './index'
import api from '../../api/characters/characters'

const props = {
  match: {
    params: { heroId: '10' },
    path: '',
    url: '',
  },
}
const responseChar = {
  attributionHTML: '<a href="http://marvel.com">Data provided by Marvel. © 2020 MARVEL</a>',
  attributionText: 'Data provided by Marvel. © 2020 MARVEL',
  code: 200,
  copyright: '© 2020 MARVEL',
  data: {
    offset: 0,
    limit: 20,
    total: 1,
    count: 1,
    results: [
      {
        description: '',
        id: 1011334,
        modified: '2014-04-29T14:18:17-0400',
        name: '3-D Man',
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011334',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
          extension: 'jpg',
        },
      },
    ],
  },
  etag: '55342c8b21941bfea4b795ff85633d9063e1da0e',
  status: 'Ok',
}

const responseSerie = {
  attributionHTML: '<a href="http://marvel.com">Data provided by Marvel. © 2020 MARVEL</a>',
  attributionText: 'Data provided by Marvel. © 2020 MARVEL',
  code: 200,
  copyright: '© 2020 MARVEL',
  data: {
    offset: 0,
    limit: 20,
    total: 3,
    count: 3,
    results: [
      {
        description: null,
        endYear: 2010,
        id: 1945,
        modified: '2013-03-20T17:51:27-0400',
        next: null,
        previous: null,
        rating: 'T',
        resourceURI: 'http://gateway.marvel.com/v1/public/series/1945',
        startYear: 2007,
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/514a2ed3302f5',
          extension: 'jpg',
        },
        title: 'Avengers: The Initiative (2007 - 2010)',
        type: '',
      },
    ],
  },
  etag: '0e0d87b84e4d425556f11574ac48073202c8d181',
  status: 'Ok',
}

describe('HeroDetail()', () => {
  test('should render HeroDetail component', async () => {
    const { getByTestId } = render(<HeroDetail {...props} />)
    await waitForElement(() => getByTestId('data-hero-detail'))

    expect(getByTestId('data-hero-detail')).toBeDefined()
  })

  test('should api return with right values', async () => {
    api.getCharacterDetail = jest.fn().mockReturnValueOnce(responseChar)
    api.getCharacterSerie = jest.fn().mockReturnValueOnce(responseSerie)
    const { getByTestId } = render(<HeroDetail {...props} />)

    await waitForElement(() => getByTestId('data-Character-detail'))
    expect(api.getCharacterDetail).toHaveReturnedWith(responseChar)
    expect(api.getCharacterSerie).toHaveReturnedWith(responseSerie)
    expect(api.getCharacterSerie).toHaveBeenCalledTimes(1)
    expect(api.getCharacterSerie).toHaveBeenCalledTimes(1)
  })
})
