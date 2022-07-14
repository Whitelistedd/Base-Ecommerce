import { Add, Remove } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { devices } from '../../data'
import { CartProductProps } from './Cart.model'

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
          <ProductPrice>₽{item.price}</ProductPrice>
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

const ProductWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  flex: 2;
`

const StyledImage = styled(Image)``

const ProductImage = styled.div`
  width: 120px;
`

const ProductDetails = styled.div`
  display: flex;
  gap: 1em;
  margin-left: 1em;
  flex-direction: column;
  color: rgb(151, 150, 150);
  flex: 1;
  font-size: 16px;
`

const ProductName = styled.span`
  font-size: 0.9em;
  font-weight: 700;
  letter-spacing: 2.4px;
`

const ProductSizeAndColor = styled.span`
  font-size: 0.75em;
  font-weight: 700;
  letter-spacing: 2.4px;
`

const ProductPrice = styled.span`
  font-size: 0.75em;
  font-weight: 700;
  letter-spacing: 2.4px;
  flex: 1;
`

const Price = styled.span`
  flex: 1;
  text-align: right;
  color: #9d9d9d;
`

const QuantityContainer = styled.div`
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

const QuantityWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1em;
  flex: 1;
  color: #9d9d9d;
`

const Amount = styled.span`
  font-size: 20px;
`

const RemoveProducts = styled.div``

const RemoveButton = styled.a`
  text-decoration: underline;

  &:hover {
    cursor: pointer;
  }
`

const Product = styled.div`
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
