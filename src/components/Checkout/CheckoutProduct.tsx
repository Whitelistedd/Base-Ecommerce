import { Badge } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { devices } from '../../data'
import { CheckoutProductProps } from './Checkout.model'

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
          <ItemExtraInfo>{`${item.size} / ${item.color}`}</ItemExtraInfo>
        </ItemInfo>
      </Item>
      <Price>₽{item.price * item.quantity}</Price>
    </Container>
  )
}

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`

const Price = styled.p`
  color: rgb(50, 50, 50);
  font-weight: 600;
  margin: 0px;
  font-size: 15px;
`

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`

const ItemName = styled.p`
  font-weight: 700;
  font-size: 14px;
`

const ProductImage = styled.div`
  width: 4vw;
  min-width: 56px;
  min-height: 76px;
`

const StyledImage = styled(Image)``

const ItemExtraInfo = styled.p`
  font-size: 12px;
  color: grey;
`

const Container = styled.div`
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
