import Image from 'next/image'
import { devices } from 'data/MediaQueries'
import styled from 'styled-components'

export const Font = 'Barlow'

export const Title = styled.h1`
  font-family: 'FuturaLight';
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 1.5em;
  color: black;
  margin-bottom: 0px;
`

export const Price = styled.span`
  font-family: ${Font};
  font-weight: 500;
  font-size: 1.2em;
  margin-top: -45px;
  margin-bottom: 10px;
`

export const BenifitsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`

export const Benifits = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`

export const Perks = styled.span`
  font-size: 1em;
`

export const BeiniftsIMG = styled(Image)`
  width: 1vw;
`

export const StyledButton = styled.button`
  padding: 1em;
  font-size: 1em;
  font-weight: 700;
  border: 0px;
  width: 100%;
  background-color: #018748;
  color: white;
  &:hover {
    cursor: pointer;
  }
`

export const OutOfStockButton = styled(StyledButton)`
  background-color: grey;
  &:hover {
    cursor: not-allowed;
  }
`

export const QuantityInfo = styled.div`
  display: flex;
  gap: 10px;
`

export const QuantityContainer = styled.div`
  display: flex;
  gap: 0.5em;
  align-items: center;
  border: 1px solid #282828;
  flex: 1;
  height: 100%;
  color: #282828;
  font-size: 1em;
  svg {
    width: 1.7em;
    height: 1.7em;
    padding: 0.3em;
    &:hover {
      cursor: pointer;
    }
  }
`

export const Amount = styled.span`
  font-size: 1.1em;
`

export const InfoContainer = styled.div`
  display: flex;
  height: 60vh;
  width: 22vw;
  min-width: 400px;
  gap: 3em;
  color: #282828;
  flex-direction: column;
  @media only screen and (max-width: ${devices.Desktop}px) {
    width: 30vw;
    height: 49vh;
    ${QuantityContainer} {
      font-size: 13px;
    }
    ${Amount} {
      font-size: 1.3em;
    }
  }
  @media only screen and (max-width: ${devices.Laptop}px) {
    width: 70%;
    min-width: 600px;
    flex-direction: column;
    padding: 2em;
    margin-bottom: 100px;
    ${QuantityContainer} {
      width: 105px;
    }
    ${QuantityInfo} {
      flex-direction: column;
    }
    ${Benifits} {
      margin-top: 15px;
    }
    ${BeiniftsIMG} {
      width: 4vw;
    }
    ${Perks} {
      font-size: 1em;
    }
    ${BenifitsContainer} {
      margin: 1em 0em;
      align-items: center;
    }
    ${Title} {
      text-align: center;
    }
    ${Price} {
      text-align: center;
    }
  }
  @media only screen and (max-width: ${devices.Tablet}px) {
    font-size: 15px;
    min-width: 350px;
    padding: 2em;
    height: 100%;
    margin-bottom: 0px;
  }
`
