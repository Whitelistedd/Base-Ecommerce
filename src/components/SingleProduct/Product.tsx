import React from 'react'
import styled from 'styled-components'

import { devices } from '../../data'
import { ImageSwipe } from './Images/ImageSwipe'
import { ProductForm } from './ProductForm'
import { ProductImages } from './Images/ProductImages'
import { ProductProps } from './SingleProduct.model'

export const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <Container>
      <ProductsWrap>
        <ImageSwipe productInfo={product} />
        <ProductImages productInfo={product} />
        <ProductForm productInfo={product} />
      </ProductsWrap>
    </Container>
  )
}

const Fontcolor = '#9d9d9d'

const ProductsWrap = styled.div`
  display: flex;
  gap: 10em;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 90vh;
  margin-bottom: 9em;
  align-items: center;
  color: ${Fontcolor};
  @media only screen and (max-width: ${devices.Desktop}px) {
    ${ProductsWrap} {
      gap: 0em;
    }
  }
  @media only screen and (max-width: ${devices.Laptop}px) {
    ${ProductsWrap} {
      flex-direction: column;
      width: 100vw;
      align-items: center;
      min-height: 100vh;
    }
    min-height: 100vh;
    margin-bottom: 0px;
  }
`
