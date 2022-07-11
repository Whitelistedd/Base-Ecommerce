import { Add, Remove } from '@mui/icons-material'
import { Alert } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

import { devices } from '../../data'
import Undo from '../../images/undo.svg'
import { SingleProductFilters } from './Filters'
import { ProductFormProps } from './SingleProduct.model'

export const ProductForm: React.FC<ProductFormProps> = ({
  productInfo,
  productType,
  handleCart,
  error,
  handleProductType,
  handleQuantity,
  quantity,
}) => {
  return (
    <InfoContainer>
      <Title>{productInfo.title}</Title>
      <Price>₽{productInfo.price}</Price>

      <SingleProductFilters
        SelectedColor={productType.color}
        selectedSize={productType.size}
        AvailableColors={productInfo.color}
        AvailableSizes={productInfo.size}
        handleProductType={handleProductType}
      />
      {/* если цвет или размер не выбраны, будет отображаться ошибка */}
      {error && (
        <Alert severity="error">Пожалуйста, выберите нужный цвет/размер.</Alert>
      )}
      <QuantityInfo>
        <QuantityContainer>
          <Remove onClick={() => handleQuantity('remove')} />
          <Amount>{quantity}</Amount>
          <Add onClick={() => handleQuantity('add')} />
        </QuantityContainer>
        {/* если товара нет в наличии, пользователь не сможет добавить его в корзину */}
        {productInfo.inStock ? (
          <StyledButton onClick={() => handleCart()}>ADD TO CART</StyledButton>
        ) : (
          <OutOfStockButton>Out Of Stock</OutOfStockButton>
        )}
      </QuantityInfo>
      <BenifitsContainer>
        <Benifits>
          <BeiniftsIMG src={Undo} />
          <Perks>Бесплатный возврат всех заказов из России</Perks>
        </Benifits>
      </BenifitsContainer>
    </InfoContainer>
  )
}

const Font = 'Barlow'

const Title = styled.h1`
  font-family: 'FuturaLight';
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 1.5em;
  color: black;
  margin-bottom: 0px;
`

const Price = styled.span`
  font-family: ${Font};
  font-weight: 500;
  font-size: 1.2em;
  margin-top: -45px;
  margin-bottom: 10px;
`

const BenifitsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`

const Benifits = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`

const Perks = styled.span`
  font-size: 1em;
`

const BeiniftsIMG = styled.img`
  width: 1vw;
`

const StyledButton = styled.button`
  padding: 1em;
  font-size: 1em;
  font-weight: 700;
  border: 0px;
  width: 100%;
  background-color: #018748;
  color: white;
  &:hover {
    cursor: pointer;
  }
`

const OutOfStockButton = styled(StyledButton)`
  background-color: grey;
  &:hover {
    cursor: not-allowed;
  }
`

const QuantityInfo = styled.div`
  display: flex;
  gap: 10px;
`

const QuantityContainer = styled.div`
  display: flex;
  gap: 0.5em;
  align-items: center;
  border: 1px solid #282828;
  flex: 1;
  height: 100%;
  color: #282828;
  font-size: 1em;
  svg {
    width: 1.7em;
    height: 1.7em;
    padding: 0.3em;
    &:hover {
      cursor: pointer;
    }
  }
`

const Amount = styled.span`
  font-size: 1.1em;
`

const InfoContainer = styled.div`
  display: flex;
  height: 60vh;
  width: 22vw;
  min-width: 400px;
  gap: 3em;
  color: #282828;
  flex-direction: column;
  @media only screen and (max-width: ${devices.Desktop}px) {
    width: 30vw;
    height: 49vh;
    ${QuantityContainer} {
      font-size: 13px;
    }
    ${Amount} {
      font-size: 1.3em;
    }
  }
  @media only screen and (max-width: ${devices.Tablet}px) {
    width: 70%;
    min-width: 600px;
    flex-direction: column;
    padding: 2em;
    margin-bottom: 100px;
    ${QuantityContainer} {
      width: 105px;
    }
    ${QuantityInfo} {
      flex-direction: column;
    }
    ${Benifits} {
      margin-top: 15px;
    }
    ${BeiniftsIMG} {
      width: 4vw;
    }
    ${Perks} {
      font-size: 1em;
    }
    ${BenifitsContainer} {
      margin: 1em 0em;
      align-items: center;
    }
    ${Title} {
      text-align: center;
    }
    ${Price} {
      text-align: center;
    }
  }
  @media only screen and (max-width: ${devices.Tablet}px) {
    font-size: 15px;
    min-width: 350px;
    padding: 2em;
    height: 100%;
    margin-bottom: 0px;
  }
`
