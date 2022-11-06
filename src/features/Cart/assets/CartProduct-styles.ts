import Image from 'next/image'
import { devices } from 'data/MediaQueries'
import styled from '@emotion/styled'

export const ProductWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`

export const StyledImage = styled(Image)``

export const ProductImage = styled.div`
  max-width: 120px;
  width: 100%;
  height: 100%;
  min-width: 90px;
  min-height: 90px;
`

export const ProductDetails = styled.div`
  display: flex;
  padding-top: 20px;
  align-self: flex-start;
  justify-self: flex-start;
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
  font-size: 0.65em;
  font-weight: 700;
  letter-spacing: 2.4px;
  flex: 1;
`

export const Price = styled.span`
  flex: 1;
  text-align: right;
  align-self: center;
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
  width: 100%;

  @media only screen and (max-width: 700px) {
    ${Amount} {
      font-size: 15px;
    }
    ${Price} {
      display: none;
    }
    ${ProductDetails} {
      gap: 0.4em;
    }
    ${ProductImage} {
      width: 70px;
    }
    ${QuantityContainer} {
      svg {
        width: 33px;
        height: 33px;
        padding: 0.3em;
      }
    }
  }
  @media only screen and (max-width: ${devices.Phone}px) {
    ${ProductWrap} {
      flex-direction: column;
      gap: 7px;
    }
    ${QuantityWrap} {
      align-self: flex-start;
      width: 100%;
      justify-content: space-between;
      padding-left: 0.9em;
      gap: 0px;
      flex-direction: row;
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
