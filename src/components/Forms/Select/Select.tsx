import { MenuItem, Select as MuiSelect } from '@mui/material'

import { Controller } from 'react-hook-form'
import styled from 'styled-components'

export const Select = (props: any) => {
  return (
    <Controller
      name="address.country"
      control={props.control}
      defaultValue={props.defaultValue}
      rules={{ required: 'Select a Region/Country' }}
      render={({ field }) => (
        <Container>
          <StyledSelect {...field} error={props.error} {...props}>
            {props.children}
          </StyledSelect>
          {props.error && <Error>{props.error}</Error>}
        </Container>
      )}
    />
  )
}

const Container = styled.div`
  height: 100%;
`

const Error = styled.p`
  font-size: 0.85em;
  color: red;
  margin: 0px;
  font-family: 'Roboto';
`

const StyledSelect = styled(MuiSelect)<{ error: string }>`
  padding: 1em;
  width: 100%;
  height: 100%;
  max-height: 44px;
  margin-bottom: 7px;
  max-width: 100%;
  border-radius: 5px;
  border: 1px solid #d9d9d9;
  border: none;
  outline: ${({ error }) => (error ? '2px solid red' : 'none')} !important;
  select:focus {
    outline: 2px solid #b69f8d;
  }
`
