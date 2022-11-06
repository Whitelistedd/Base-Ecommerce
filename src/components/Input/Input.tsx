import { UseFormRegister } from 'react-hook-form'
import styled from '@emotion/styled'

export const Input = (props: any) => {
  return (
    <Container>
      <StyledInput error={props.error} {...props} />
      {props.error && <Error>{props.error}</Error>}
    </Container>
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
    border: 2px solid #b69f8d;
  }
`
