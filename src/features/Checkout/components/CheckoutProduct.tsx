import {
  Container,
  Item,
  ItemExtraInfo,
  ItemInfo,
  ItemName,
  ProductImage,
  StyledImage,
} from '../assets/CheckoutProduct'

import { Badge } from '@mui/material'
import { CheckoutProductProps } from '../types/Checkout.model'
import { Price } from '../assets/Checkout-styles'
import React from 'react'

export const CheckoutProduct: React.FC<CheckoutProductProps> = ({ item }) => {
  return (
    <Container>
      <Item>
        {/* компонент для отображения количества */}
        <Badge
          badgeContent={item.quantity}
          color="primary"
          sx={{
            '.MuiBadge-colorPrimary': { backgroundColor: '#808080' },
          }}
        >
          <ProductImage>
            <StyledImage
              layout="responsive"
              width={83}
              height={111}
              src={item.img[0]}
              alt={item.title}
            />
          </ProductImage>
        </Badge>
        <ItemInfo>
          <ItemName>{item.title}</ItemName>
          <ItemExtraInfo>{`${
            item.size
          } / ${item.color.toUpperCase()}`}</ItemExtraInfo>
        </ItemInfo>
      </Item>
      <Price>₽{item.price * item.quantity}</Price>
    </Container>
  )
}
