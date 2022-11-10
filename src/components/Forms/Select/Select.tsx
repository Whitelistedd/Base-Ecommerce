import { MenuItem, Select as MuiSelect } from '@mui/material'

import styled from 'styled-components'

export const Select = (props: any) => {
  return (
    <Container>
      <StyledSelect error={props.error} {...props}>
        {props.children}
      </StyledSelect>
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

const StyledSelect = styled(MuiSelect)<{ error: string }>`
  padding: 1em;
  width: 100%;
  max-height: 44px;
  margin-bottom: 7px;
  max-width: 100%;
  border-radius: 5px;
  border: 1px solid #d9d9d9;
  border: none;
  outline: ${({ error }) => (error ? '2px solid red' : 'none')} !important;
  sel &:focus {
    outline: 2px solid #b69f8d;
  }
`
