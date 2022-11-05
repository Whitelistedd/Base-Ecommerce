import { Add, Remove } from '@mui/icons-material'
import {
  Amount,
  Price,
  Product,
  ProductDetails,
  ProductImage,
  ProductName,
  ProductSizeAndColor,
  ProductWrap,
  QuantityContainer,
  QuantityWrap,
  RemoveButton,
  RemoveProducts,
  StyledImage,
} from '../assets/CartProduct-styles'

import { CartProductProps } from '../types/Cart.model'
import Image from 'next/image'
import React from 'react'
import { devices } from 'data/MediaQueries'
import styled from 'styled-components'

export const CartProduct: React.FC<CartProductProps> = ({
  item,
  index,
  handlequantity,
  handleRemoveProduct,
}) => {
  return (
    <Product>
      <ProductWrap>
        <ProductImage>
          <StyledImage
            layout="responsive"
            width={120}
            height={160}
            src={`${item.img[0]}`}
            alt={item.title}
          />
        </ProductImage>
        <ProductDetails>
          <ProductName>{item.title}</ProductName>
          <ProductSizeAndColor>
            {`${item.size} / ${item.color}`}
          </ProductSizeAndColor>
        </ProductDetails>
      </ProductWrap>
      <QuantityWrap>
        <QuantityContainer>
          <Remove onClick={() => handlequantity(index, 'rem')} />
          <Amount>{item.quantity}</Amount>
          <Add onClick={() => handlequantity(index, 'add')} />
        </QuantityContainer>
        <RemoveProducts>
          <RemoveButton onClick={() => handleRemoveProduct(index, item)}>
            Удалять
          </RemoveButton>
        </RemoveProducts>
      </QuantityWrap>
      <Price>₽{item.quantity * item.price}</Price>
    </Product>
  )
}
