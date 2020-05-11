import React from 'react'
import PropTypes from 'prop-types'
import { TextField } from '@material-ui/core'
import FormControl from './InputField.styles'

const InputField = ({ label, name, errors, ...props }) => (
  <FormControl>
    <TextField label="Buscar por Heróis" name={name} {...props} />
    {errors[name] && errors[name].type === 'required' && <span>Esse campo é obrigatório</span>}
  </FormControl>
)

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
}

export default InputField
