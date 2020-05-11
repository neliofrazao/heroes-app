import React from 'react'
import { render, screen, fireEvent, waitForElement } from '@testing-library/react'
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

  test('should render hero list component ', async () => {
    const { getByTestId } = render(<HeroList />)
    await waitForElement(() => getByTestId('data-hero-list'))
    expect(getByTestId('data-hero-list')).toBeDefined()
  })

  test('should api return with right', async () => {
    api.getCharacters = jest.fn().mockReturnValueOnce(response)
    const { getByTestId } = render(<HeroList />)

    await waitForElement(() => getByTestId('data-hero-list'))
    expect(api.getCharacters).toHaveReturnedWith(response)
    expect(api.getCharacters).toHaveBeenCalledTimes(1)
  })

  test('should receive error', async () => {
    api.getCharacters = jest.fn().mockRejectedValueOnce({})
    const { getByTestId } = render(<HeroList />)
    await waitForElement(() => getByTestId('data-hero-list'))

    expect(api.getCharacters).toHaveBeenCalledTimes(1)
  })

  test('should show required menssage ', async () => {
    const { getByTestId } = render(<HeroList />)
    fireEvent.click(getByTestId('data-button-search'))
    await waitForElement(() => getByTestId('data-hero-list'))
    const SUT = screen.getByText('Esse campo é obrigatório')
    expect(SUT).toBeDefined()
  })
})
