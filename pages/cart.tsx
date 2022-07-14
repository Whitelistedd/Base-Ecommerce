import React from 'react'
import { Cart } from '../src/components/Cart/Cart'
import { NextPage } from 'next'
import { UpdateProducts } from '../src/apiCalls/apiCalls'
import { wrapper } from '../src/redux/store/store'

const CartPage: NextPage = () => {
  return <Cart />
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const cart = store.getState().cart
    await UpdateProducts(cart.products, store.dispatch)

    return {
      props: {},
    }
  }
)

export default CartPage
