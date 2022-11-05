import { Container, ProductsWrap } from '../assets/Product-styles'

import { ImageSwipe } from './Images/ImageSwipe'
import { ProductForm } from './ProductForm'
import { ProductImages } from './Images/ProductImages'
import { ProductProps } from '../types/SingleProduct.model'
import React from 'react'

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
