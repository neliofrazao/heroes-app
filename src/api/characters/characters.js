import http from '../../utils/http'

const getCharacters = async () => {
  const { data } = await http.get('/characters')
  return data
}

export default {
  getCharacters,
}
