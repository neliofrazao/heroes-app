import http from '../../utils/http'
import api from './characters'

describe('Characters()', () => {
  test('should GET characters url with right param', async () => {
    expect.assertions(1)
    jest.spyOn(http, 'get')
    http.get.mockImplementation((url) => ({
      data: {
        url,
      },
    }))

    const result = await api.getCharacters()
    expect(result.url).toBe('/characters')
    http.get.mockRestore()
  })

  test('should GET characters detail url with right param', async () => {
    expect.assertions(1)
    jest.spyOn(http, 'get')
    http.get.mockImplementation((url) => ({
      data: {
        url,
      },
    }))

    const result = await api.getCharacterDetail('1011334')
    expect(result.url).toBe('/characters/1011334')
    http.get.mockRestore()
  })

  test('should GET series url with right param', async () => {
    expect.assertions(1)
    jest.spyOn(http, 'get')
    http.get.mockImplementation((url) => ({
      data: {
        url,
      },
    }))

    const result = await api.getCharacterSerie('1011334')
    expect(result.url).toBe('/characters/1011334/series')
    http.get.mockRestore()
  })
})
