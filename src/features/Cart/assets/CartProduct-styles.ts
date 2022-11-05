import Image from 'next/image'
import { devices } from 'data/MediaQueries'
import styled from 'styled-components'

export const ProductWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  flex: 2;
`

export const StyledImage = styled(Image)``

export const ProductImage = styled.div`
  width: 120px;
`

export const ProductDetails = styled.div`
  display: flex;
  gap: 1em;
  margin-left: 1em;
  flex-direction: column;
  color: rgb(151, 150, 150);
  flex: 1;
  font-size: 16px;
`

export const ProductName = styled.span`
  font-size: 0.9em;
  font-weight: 700;
  letter-spacing: 2.4px;
`

export const ProductSizeAndColor = styled.span`
  font-size: 0.75em;
  font-weight: 700;
  letter-spacing: 2.4px;
`

export const ProductPrice = styled.span`
  font-size: 0.75em;
  font-weight: 700;
  letter-spacing: 2.4px;
  flex: 1;
`

export const Price = styled.span`
  flex: 1;
  text-align: right;
  color: #9d9d9d;
`

export const QuantityContainer = styled.div`
  display: flex;
  gap: 0.5em;
  align-items: center;
  justify-content: center;
  border: 1px solid #efefef;
  svg {
    color: #9d9d9d;
    width: 50px;
    height: 50px;
    padding: 0.5em;
    &:hover {
      cursor: pointer;
    }
  }
`

export const QuantityWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1em;
  flex: 1;
  color: #9d9d9d;
`

export const Amount = styled.span`
  font-size: 20px;
`

export const RemoveProducts = styled.div``

export const RemoveButton = styled.a`
  text-decoration: underline;

  &:hover {
    cursor: pointer;
  }
`

export const Product = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media only screen and (max-width: ${devices.Tablet}px) {
    ${Amount} {
      font-size: 20px;
    }
    ${Price} {
      display: none;
    }
    ${ProductDetails} {
      gap: 0.4em;
      align-self: flex-start;
    }
    ${ProductImage} {
      width: 70px;
    }
  }
  @media only screen and (max-width: ${devices.Phone}px) {
    ${QuantityContainer} {
      svg {
        width: 40px;
        height: 40px;
        padding: 0.5em;
      }
    }
    ${ProductDetails} {
      font-size: 14px;
    }
    ${Amount} {
      font-size: 15px;
    }
    ${RemoveButton} {
      font-size: 14px;
    }
  }
`
