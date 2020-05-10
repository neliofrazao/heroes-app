import React, { Fragment, useEffect, useState } from 'react'
import { Grid } from '@material-ui/core'
import Card from '../../Components/Card'
import api from '../../api/characters/characters'

const HeroList = () => {
  const [characters, setCharacters] = useState([])
  const [isLoad, setIsLoad] = useState(false)

  useEffect(() => {
    const getCharactersData = async () => {
      setIsLoad(true)
      try {
        const { data } = await api.getCharacters()
        setCharacters(data)
      } catch (error) {
        setCharacters([])
      }
      setIsLoad(false)
    }
    getCharactersData()
  }, [])

  return (
    <div data-testid="data-hero-list">
      <>
        <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={4}>
          {!isLoad && characters.results ? (
            <>
              {characters.results.map(({ id, name, thumbnail: { path, extension } }) => (
                <Fragment key={id}>
                  <Grid item xs={3}>
                    <Card imgUrl={`${path}.${extension}`} name={name} link="/link" />
                  </Grid>
                </Fragment>
              ))}
            </>
          ) : (
            <p>Carregando</p>
          )}
        </Grid>
      </>
    </div>
  )
}

export default HeroList
