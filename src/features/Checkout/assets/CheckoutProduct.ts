import Image from 'next/image'
import { devices } from 'data/MediaQueries'
import styled from 'styled-components'

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`

export const Price = styled.p`
  color: rgb(50, 50, 50);
  font-weight: 600;
  margin: 0px;
  font-size: 15px;
`

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`

export const ItemName = styled.p`
  font-weight: 700;
  font-size: 14px;
`

export const ProductImage = styled.div`
  width: 70px;
  min-width: 56px;
  min-height: 76px;
`

export const StyledImage = styled(Image)``

export const ItemExtraInfo = styled.p`
  font-size: 12px;
  color: grey;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: ${devices.Laptop}px) {
    ${StyledImage} {
      width: 6vw;
    }
  }

  @media only screen and (max-width: ${devices.Tablet}px) {
    ${StyledImage} {
      width: 8vw;
    }
  }
`
