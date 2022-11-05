import MuiButton from '@mui/material/Button'
import styled from 'styled-components'

export const Button = (props: any) => {
  return <StyledButton {...props}>{props.children}</StyledButton>
}

export const StyledButton = styled(MuiButton)`
  font-family: DIN Neuzeit, sans-serif;
  font-weight: 100;
  background-color: transparent;
  border: 0px;
  color: white;
  background-color: #282828;
  font-weight: 700;
  letter-spacing: 2px;
  font-size: 1em;
  padding: 0.8em 1.5em;
  z-index: 2;
  cursor: pointer;
  transition: 300ms ease;
  border-radius: 1.5px;
  &:hover {
    background-color: #1d1c1c;
  }
  &:disabled {
    color: grey;
    cursor: not-allowed;
  }
`
