import React, { useContext, Fragment, useEffect, useState } from 'react'
import { Grid } from '@material-ui/core'
import Card from '../../Components/Card'
import api from '../../api/characters/characters'
import LoadContext from '../../Shared/Loading/store'

const HeroList = () => {
  const [characters, setCharacters] = useState([])
  const { isLoad, setIsLoad } = useContext(LoadContext)

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
  }, [setIsLoad])

  return (
    <div data-testid="data-hero-list">
      <>
        <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={3}>
          {!isLoad && (
            <>
              {characters.results &&
                characters.results.length > 1 &&
                characters.results.map(({ id, name, thumbnail: { path, extension } }) => (
                  <Fragment key={id}>
                    <Grid item xs={12} md={4} lg={3}>
                      <Card imgUrl={`${path}.${extension}`} name={name} link={`/hero/${id}`} />
                    </Grid>
                  </Fragment>
                ))}
            </>
          )}
        </Grid>
      </>
    </div>
  )
}

export default HeroList
