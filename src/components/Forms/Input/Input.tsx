import { Control, Controller } from 'react-hook-form'
import { TextField, TextFieldProps } from '@mui/material'

import { InfoType } from '@/features/Checkout'
import styled from 'styled-components'

interface InputProps {
  name:
    | 'address'
    | 'saveInfo'
    | 'firstName'
    | 'lastName'
    | 'email'
    | 'phoneNumber'
    | 'shippingMethod'
    | 'address.address'
    | 'address.city'
    | 'address.country'
    | 'address.zipCode'
    | 'address.apartment'
  label?: React.ReactNode
  control?: Control<InfoType>
  type: string
  defaultValue?: string
  required?: boolean | string
  placeholder: string
  valueAsNumber?: boolean
  inputProps?: TextFieldProps
  error?: string
}

export const Input = (props: InputProps) => {
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
            {...field}
            formError={props.error ? `${props.error}` : ''}
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

const StyledInput = styled(TextField)<{ formError: string }>`
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
