import { LoadingButton } from '@mui/lab'
import styled from '@emotion/styled'

export const Button = (props: any) => {
  return (
    <StyledButton loading={props.loading} {...props}>
      {props.children}
    </StyledButton>
  )
}

export const StyledButton = styled(LoadingButton)<{ loading: boolean }>`
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

  ${({ loading }) =>
    loading &&
    `
  background-color: grey !important;
  `}

  &:hover {
    background-color: #1d1c1c;
  }
  &:disabled {
    color: grey;
    cursor: not-allowed;
  }
`
