import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { useForm } from 'react-hook-form'
import { InputField } from '../../Shared'
import Form from './SearchForm.styles'

const SearchForm = ({ onSubmit }) => {
  const { handleSubmit, register, errors } = useForm()

  return (
    <Form onSubmit={handleSubmit(onSubmit)} data-testid="data-search-form">
      <InputField
        label="Buscar por Heróis"
        inputRef={register({ required: true })}
        name="heroName"
        errors={errors}
      />
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
