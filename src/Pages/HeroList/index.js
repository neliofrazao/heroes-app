import React, { useEffect, useState } from 'react'
import api from '../../api/characters/characters'

const HeroList = () => {
  // eslint-disable-next-line no-unused-vars
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const getCharactersData = async () => {
      try {
        const { data } = await api.getCharacters()
        setCharacters(data)
      } catch (error) {
        setCharacters([])
      }
    }
    getCharactersData()
  }, [])

  return (
    <div data-testid="data-hero-list">
      <p>Hero List</p>
    </div>
  )
}

export default HeroList
