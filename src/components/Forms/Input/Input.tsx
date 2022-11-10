import { Controller, UseFormRegister } from 'react-hook-form'

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
          <StyledInput {...field} error={props.error} {...props} />
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

const StyledInput = styled.input<{ error: string }>`
  padding: 1em;
  width: 100%;
  margin-bottom: 7px;
  max-width: 100%;
  border-radius: 5px;
  border: 1px solid #d9d9d9;
  outline: ${({ error }) => (error ? '2px solid red' : 'none')};
  &:focus {
    outline: 2px solid #b69f8d;
  }
`
