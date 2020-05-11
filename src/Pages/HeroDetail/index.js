import React, { useContext, useEffect, useState } from 'react'
import LoadContext from '../../Shared/Loading/store'
import api from '../../api/characters/characters'

const fetchHeroData = async (heroId) => {
  const [dataCharacter, dataSerie] = await Promise.all([
    api.getCharacterDetail(heroId),
    api.getCharacterSerie(heroId),
  ])

  return {
    dataCharacter,
    dataSerie,
  }
}

const mountCharactersInfo = ({ data: { results } }) => {
  const [characterInfo] = results

  const characters = {
    id: characterInfo.id,
    name: characterInfo.name,
    description: characterInfo.description,
    thumbnail: `${characterInfo.thumbnail.path}.${characterInfo.thumbnail.extension}`,
  }

  return characters
}

const HeroDetail = () => {
  // eslint-disable-next-line no-unused-vars
  const [characters, setCharacters] = useState({ name: '', description: '', thumbnail: '' })
  // eslint-disable-next-line no-unused-vars
  const [series, setSeries] = useState([])
  // eslint-disable-next-line no-unused-vars
  const { isLoad, setIsLoad } = useContext(LoadContext)

  useEffect(() => {
    const getCharactersData = async () => {
      setIsLoad(true)
      try {
        const {
          dataCharacter,
          dataSerie: { data },
        } = await fetchHeroData('1009146')
        setCharacters(mountCharactersInfo(dataCharacter))
        setSeries(data)
      } catch (error) {
        setCharacters([])
      }
      setIsLoad(false)
    }
    getCharactersData()
  }, [setIsLoad])

  return <div data-testid="data-hero-detail">HeroDetail</div>
}

export default HeroDetail
