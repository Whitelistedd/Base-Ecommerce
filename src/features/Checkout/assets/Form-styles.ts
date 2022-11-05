import { devices } from 'data/MediaQueries'
import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 17px;
  font-weight: 500;
`

export const Input = styled.input`
  padding: 1em;
  max-width: 100%;
  border-radius: 5px;
  border: 1px solid #d9d9d9;
  outline: none;
  &:focus {
    border: 2px solid #b69f8d;
  }
`

export const InputPhone = styled(Input)`
  font-size: 12px;
`

export const Button = styled.button`
  align-self: flex-end;
  padding: 1.3em 1em;
  color: white;
  font-size: 14px;
  font-weight: 700;
  border-radius: 5px;
  background: #454545;
  transition: 400ms ease;
  border: none;
  &:hover {
    transition: 400ms ease;
    cursor: pointer;
    background: rgba(0, 0, 0, 0.8);
  }
  min-width: 30%;
`

export const GatheredInput = styled.div`
  width: 100%;
  display: flex;
  gap: 1em;
  justify-content: space-between;
  input {
    width: 100%;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70%;
  gap: 1em;
`

export const ShippingForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`

export const ShippingWrap = styled.div`
  border: 1px solid #d9d9d9;
  border-radius: 5px;
`

export const ShippingMethod = styled.div`
  color: rgb(84, 84, 84);
  display: flex;
  padding: 1em;
  gap: 1em;
  border-bottom: 1px solid #d9d9d9;
  align-items: center;
`

export const InputRadio = styled.input`
  transform: scale(1.5);
  &:checked {
    accent-color: brown;
  }
`

export const Label = styled.label`
  flex: 2;
  &:hover {
    cursor: pointer;
  }
`

export const ErrorMessage = styled.p`
  color: red;
  border-radius: 5px;
  padding: 1em 0em;
  font-size: 17px;
  align-self: flex-end;
`

export const Price = styled.p`
  margin: 0px;
`

export const Information = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  min-height: 60%;
  gap: 1em;
  padding: 0.5em;
  @media only screen and (max-width: ${devices.Laptop}px) {
    width: 90%;
    justify-content: center;
  }
`
