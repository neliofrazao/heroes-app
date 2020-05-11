import http from '../../utils/http'

const getCharacters = async () => {
  const { data } = await http.get('/characters')
  return data
}

const seacrhCharacters = async (heroName) => {
  const { data } = await http.get(`/characters?nameStartsWith=${heroName}`)
  return data
}

const getCharacterDetail = async (heroId) => {
  const { data } = await http.get(`/characters/${heroId}`)
  return data
}

const getCharacterSerie = async (heroId) => {
  const { data } = await http.get(`/characters/${heroId}/series`)
  return data
}

export default {
  getCharacters,
  seacrhCharacters,
  getCharacterDetail,
  getCharacterSerie,
}
