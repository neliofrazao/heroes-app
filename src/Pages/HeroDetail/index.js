import React, { useContext, useEffect, useState } from 'react'
import RouterPropTypes from 'react-router-prop-types'
import { CharacterDetail, SeriesList } from '../../Components'
import api from '../../api/characters/characters'
import LoadContext from '../../Shared/Loading/store'

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

const HeroDetail = ({ match }) => {
  const [characters, setCharacters] = useState([])
  const [series, setSeries] = useState([])
  const { isLoad, setIsLoad } = useContext(LoadContext)
  const { heroId } = match.params

  useEffect(() => {
    const getCharactersData = async () => {
      setIsLoad(true)
      try {
        const {
          dataCharacter,
          dataSerie: { data },
        } = await fetchHeroData(heroId)
        setCharacters(mountCharactersInfo(dataCharacter))
        setSeries(data)
      } catch (error) {
        setCharacters([])
      }
      setIsLoad(false)
    }
    getCharactersData()
  }, [heroId, setIsLoad])

  return (
    <div data-testid="data-hero-detail">
      {!isLoad && !!characters.id && (
        <>
          <CharacterDetail
            characterName={characters.name}
            characterDescription={characters.description}
            thumbnailPath={characters.thumbnail}
          />
          <SeriesList seriesInfo={series} />
        </>
      )}
    </div>
  )
}

HeroDetail.propTypes = {
  match: RouterPropTypes.match.isRequired,
}

export default HeroDetail
