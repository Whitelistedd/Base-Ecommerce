import React from 'react'
import styled from 'styled-components'

import { devices } from '../../data'
import { CheckoutProps } from './Checkout.model'
import { CheckoutProduct } from './CheckoutProduct'

export const Checkout: React.FC<CheckoutProps> = ({ cart, shipping }) => {
  return (
    <CheckOut>
      <CheckoutWrap>
        {/* покажет все товары, которые выбрал пользователь */}
        {cart.products.map((item, index) => (
          <CheckoutProduct key={index} item={item} />
        ))}
        <CostWrap>
          <CostItem>
            <CostTitle>Subtotal</CostTitle>
            <Price>₽{cart.total}</Price>
          </CostItem>
          <CostItem>
            <CostTitle>Shipping</CostTitle>
            <Price>₽{shipping}</Price>
          </CostItem>
        </CostWrap>
        <CostItem>
          <TotalTitle>Total</TotalTitle>
          <TotalCost>₽{cart.total + shipping}</TotalCost>
        </CostItem>
      </CheckoutWrap>
    </CheckOut>
  )
}

const CheckoutWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  gap: 2em;
`

const CostWrap = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #e1e1e1;
  border-bottom: 1px solid #e1e1e1;
  padding: 1em 0em;
  gap: 0.5em;
`
const CostItem = styled.div`
  display: flex;
  justify-content: space-between;
`

const CostTitle = styled.p`
  font-size: 14px;
  margin: 0px;
  color: rgb(83, 83, 83);
`

const Price = styled.p`
  color: rgb(50, 50, 50);
  font-weight: 600;
  margin: 0px;
  font-size: 15px;
`

const TotalTitle = styled.p`
  color: rgb(83, 83, 83);
  margin: 0px;
`

const TotalCost = styled.p`
  font-weight: 500;
  margin: 0px;
  font-size: 20px;
`

const CheckOut = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-top: 4em;
  padding-left: 4em;
  background: #fafafa;
  @media only screen and (max-width: ${devices.Laptop}px) {
    ${CheckoutWrap} {
      width: 90%;
    }
  }
  @media only screen and (max-width: ${devices.Tablet}px) {
    padding: 4em 0em 0em 0em;
    height: 50vh;
    background-color: white;
    align-items: center;
    ${CheckoutWrap} {
      width: 80%;
    }
  }
`
