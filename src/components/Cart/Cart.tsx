import { useRouter } from 'next/router'
import React from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'

import { devices } from '../../data'
import { UpdateProducts } from '../../apiCalls/apiCalls'
import { CartProduct } from './CartProduct'
import { EmptyCart } from './EmptyCart'
import {
  addQuantity,
  removeProduct,
  removeQuantity,
} from '../../redux/slices/cart'
import { CartProductType, handleRemoveProductType } from './Cart.model'
import { CartInitialState } from '../../redux/slices/slice.model'
import { AppDispatch, useAppSelector } from '../../redux/store/store'
import { handleQuantityType } from './Cart.model'

export const Cart: React.FC = () => {
  const router = useRouter()

  const cart: CartInitialState = useAppSelector((state) => state.cart)
  const dispatch = AppDispatch()

  /* функция изменения количества продуктов */
  const handlequantity: handleQuantityType = (index, changer) => {
    if (changer === 'rem' && cart.products[index].quantity >= 2) {
      dispatch(removeQuantity(index))
    } else if (changer === 'add' && cart.products[index].quantity >= 1) {
      dispatch(addQuantity(index))
    }
  }

  /* функция удаления товара */
  const handleRemoveProduct: handleRemoveProductType = (
    index: number,
    item: CartProductType
  ) => {
    dispatch(removeProduct({ index, item }))
  }

  /* отправит пользователя на страницу оформления заказа по клику, если в корзине есть товары */
  const handleCheckout = () => {
    if (cart.quantity > 0) {
      router.replace('/checkout')
    }
  }

  /* функция для получения всех продуктов и обновления цен и изображений продуктов в корзине */
  useEffect(() => {
    UpdateProducts(cart.products, dispatch)
  }, [])

  return (
    <Container>
      {/* если у пользователя нет товаров в корзине, покажет компонент пустой корзины */}
      {cart.products.length === 0 ? (
        <EmptyCart />
      ) : (
        <Wrapper>
          <Top>
            <ProductsTitle>ТОВАР</ProductsTitle>
            <ProductsQauntity>КОЛИЧЕСТВО</ProductsQauntity>
            <ProductsTotal>ОБЩИЙ</ProductsTotal>
          </Top>
          <Info>
            {cart.products?.map((item: CartProductType, index: number) => (
              <CartProduct
                key={index}
                item={item}
                index={index}
                handlequantity={handlequantity}
                handleRemoveProduct={handleRemoveProduct}
              />
            ))}
          </Info>
          <Bottom>
            <Total>₽{cart.total}</Total>
            <Shipping>
              Доставка и налоги рассчитываются при оформлении заказа
            </Shipping>
            <Button onClick={handleCheckout}>Перейти к оформлению</Button>
          </Bottom>
        </Wrapper>
      )}
    </Container>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 60%;
  gap: 2em;
  font-size: 16px;
`

const Top = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #dcdcdc;
  color: #9d9d9d;
`

const ProductsTitle = styled.h1`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2.4px;
  flex: 2;
`

const ProductsQauntity = styled.span`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2.4px;
  flex: 1;
  text-align: center;
`

const ProductsTotal = styled.span`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2.4px;
  flex: 1;
  text-align: right;
`
const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3em;
`

const Bottom = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 1em;
  padding-top: 1em;
  flex-direction: column;
  border-top: 1px solid #dcdcdc;
`

const Total = styled.span`
  font-size: 1em;
`

const Shipping = styled.span`
  font-size: 1em;
`

const Button = styled.button`
  font-size: 0.9em;
  min-width: 15%;
  background-color: rgb(244, 112, 38);
  outline: none;
  letter-spacing: 0.2em;
  font-weight: 700;
  border: none;
  color: white;
  padding: 17px 20px;
  transition: 400ms ease;
  &:hover {
    transition: 400ms ease;
    cursor: pointer;
    background-color: rgb(220, 112, 38);
  }
  &:disabled {
    color: grey;
    cursor: not-allowed;
    background-color: rgb(244, 112, 38);
  }
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  @media only screen and (max-width: ${devices.Desktop}px) {
    ${Wrapper} {
      width: 80%;
    }
  }
  @media only screen and (max-width: ${devices.Tablet}px) {
    justify-content: center;
    ${Wrapper} {
      width: 91%;
      font-size: 14px;
    }
    ${Top} {
      display: none;
    }
    ${Shipping} {
      text-align: right;
    }
  }
`
