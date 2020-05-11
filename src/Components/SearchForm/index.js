import React from 'react'
import PropTypes from 'prop-types'
import { Button, TextField } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { useForm } from 'react-hook-form'
import Form from './SearchForm.styles'

const SearchForm = ({ onSubmit }) => {
  const { handleSubmit, register } = useForm()

  return (
    <Form onSubmit={handleSubmit(onSubmit)} data-testid="data-search-form">
      <TextField label="Buscar por Heróis" inputRef={register} name="heroName" />
      <Button type="submit" title="buscar heróis">
        <SearchIcon />
      </Button>
    </Form>
  )
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default SearchForm
