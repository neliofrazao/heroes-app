import React, { useContext, Fragment, useEffect, useState } from 'react'
import { Grid } from '@material-ui/core'
import Card from '../../Shared/Card'
import ButtonLink from '../../Shared/ButtonLink'
import SearchForm from '../../Components/SearchForm'
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

  const onSubmit = async ({ heroName }) => {
    setIsLoad(true)
    try {
      const { data } = await api.seacrhCharacters(heroName)
      setCharacters(data)
    } catch (error) {
      setCharacters([])
    }
    setIsLoad(false)
  }

  return (
    <div data-testid="data-hero-list">
      <>
        <Grid container spacing={3}>
          {!isLoad && (
            <>
              <Grid container>
                <Grid item xs={12} lg={6}>
                  <SearchForm onSubmit={onSubmit} />
                </Grid>
              </Grid>
              {characters.results &&
                characters.results.length > 1 &&
                characters.results.map(({ id, name, thumbnail: { path, extension } }) => (
                  <Fragment key={id}>
                    <Grid item xs={12} md={4} lg={3}>
                      <Card imgUrl={`${path}.${extension}`} name={name}>
                        <ButtonLink variant="contained" link={`/hero/${id}`} name={name}>
                          Perfil do personagem
                        </ButtonLink>
                      </Card>
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
