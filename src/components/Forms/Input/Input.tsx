import { Controller, UseFormRegister } from 'react-hook-form'

import { TextField } from '@mui/material'
import styled from '@emotion/styled'

export const Input = (props: any) => {
  return (
    <Controller
      name={props.name}
      defaultValue={props.defaultValue}
      control={props.control}
      rules={{
        required: props.required,
      }}
      render={({ field }) => (
        <Container>
          <StyledInput
            label={props.placeholder}
            {...field}
            error={props.error}
            {...props}
          />
          {props.error && <Error>{props.error}</Error>}
        </Container>
      )}
    />
  )
}

const Container = styled.div``

const Error = styled.p`
  font-size: 0.85em;
  color: red;
  margin: 0px;
  font-family: 'Roboto';
`

const StyledInput = styled(TextField)<{ error: string }>`
  width: 100%;
  margin-bottom: 7px;
  max-width: 100%;
  border-radius: 5px;
  label {
    color: ${({ error }) => (error ? 'red' : '#b69f8d')} !important;
  }
  input:focus {
    border-radius: 5px;
  }
  input:hover {
  }
  fieldset {
    border-color: ${({ error }) => (error ? 'red' : '#b69f8d')} !important;
  }
`
