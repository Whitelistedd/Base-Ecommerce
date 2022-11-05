import {
  CheckOut,
  CheckoutWrap,
  CostItem,
  CostTitle,
  CostWrap,
  Price,
  TotalCost,
  TotalTitle,
} from '../assets/Checkout-styles'

import { CheckoutProduct } from './CheckoutProduct'
import { CheckoutProps } from '../types/Checkout.model'
import React from 'react'

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
