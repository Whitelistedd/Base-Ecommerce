import { Products } from 'features/Products/components/Products'
import { devices } from 'data/MediaQueries'
import styled from 'styled-components'
import { unFade } from 'data/Animations'

export const ProductsWrap = styled.div`
  display: flex;
  width: 100%;
  margin-top: 100px;
  align-items: flex-start;
  animation: 500ms ease ${unFade};
`

export const ProductsContainer = styled.div`
  flex: 5.5;
`

export const StyledProducts = styled(Products)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  .Image {
    min-width: 130px;
    width: 100%;
  }
`

export const FilterContainer = styled.div`
  display: flex;
  flex: 1;
  padding: 25px 0px;
  justify-content: center;
`

export const Container = styled.div`
  min-height: 100vh;
  @media only screen and (max-width: ${devices.Desktop}px) {
    ${StyledProducts} {
      justify-content: center;
      .Product {
        width: 250px;
      }
      .ProductInfo {
        min-width: 250px;
        font-size: 14px;
      }
      .ProductImage {
        width: 250px;
      }
    }
  }
  @media only screen and (max-width: ${devices.Tablet}px) {
    ${FilterContainer} {
      display: none;
    }
    ${StyledProducts} {
      display: flex;
      justify-content: center;
      .Image {
        min-width: 100px;
        width: 100%;
      }
    }
    ${ProductsWrap} {
      flex-direction: column;
    }
  }
`
