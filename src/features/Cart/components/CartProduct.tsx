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
import React from 'react'

export const CartProduct: React.FC<CartProductProps> = ({
  item,
  index,
  handlequantity,
  handleRemoveProduct,
}) => {
  console.log(item)
  return (
    <Product>
      <ProductImage>
        <StyledImage
          layout="responsive"
          width={120}
          height={160}
          src={`${item.img[0]}`}
          alt={item.title}
        />
      </ProductImage>
      <ProductWrap>
        <ProductDetails>
          <ProductName>{item.title}</ProductName>
          <ProductSizeAndColor>
            {`${item.size} / ${item.color?.toUpperCase()}`}
          </ProductSizeAndColor>
        </ProductDetails>
        <QuantityWrap>
          <QuantityContainer>
            <Remove onClick={() => handlequantity(index, 'rem')} />
            <Amount>{item.quantity}</Amount>
            <Add onClick={() => handlequantity(index, 'add')} />
          </QuantityContainer>
          <RemoveProducts>
            <RemoveButton onClick={() => handleRemoveProduct(index, item)}>
              Remove
            </RemoveButton>
          </RemoveProducts>
        </QuantityWrap>
        <Price>₽{item.quantity * item.price}</Price>
      </ProductWrap>
    </Product>
  )
}
