import http from '../../utils/http'
import api from './characters'

describe('Characters()', () => {
  test('should GET characters url api with right param', async () => {
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
})
