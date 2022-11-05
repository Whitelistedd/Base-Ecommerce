import { devices } from 'data/MediaQueries'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 60%;
  gap: 2em;
  font-size: 16px;
`

export const Top = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #dcdcdc;
  color: #9d9d9d;
`

export const ProductsTitle = styled.h1`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2.4px;
  flex: 2;
`

export const ProductsQauntity = styled.span`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2.4px;
  flex: 1;
  text-align: center;
`

export const ProductsTotal = styled.span`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2.4px;
  flex: 1;
  text-align: right;
`
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3em;
`

export const Bottom = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 1em;
  padding-top: 1em;
  flex-direction: column;
  border-top: 1px solid #dcdcdc;
`

export const Total = styled.span`
  font-size: 1em;
`

export const Shipping = styled.span`
  font-size: 1em;
`

export const Button = styled.button`
  font-size: 0.9em;
  min-width: 15%;
  background-color: rgb(244, 112, 38);
  outline: none;
  letter-spacing: 0.2em;
  font-weight: 700;
  border: none;
  color: white;
  padding: 17px 20px;
  transition: 400ms ease;
  &:hover {
    transition: 400ms ease;
    cursor: pointer;
    background-color: rgb(220, 112, 38);
  }
  &:disabled {
    color: grey;
    cursor: not-allowed;
    background-color: rgb(244, 112, 38);
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  @media only screen and (max-width: ${devices.Desktop}px) {
    ${Wrapper} {
      width: 80%;
    }
  }
  @media only screen and (max-width: ${devices.Tablet}px) {
    justify-content: center;
    ${Wrapper} {
      width: 91%;
      font-size: 14px;
    }
    ${Top} {
      display: none;
    }
    ${Shipping} {
      text-align: right;
    }
  }
`
