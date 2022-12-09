import { Cart, UpdateProducts } from '@/features/Cart'

import Head from 'next/head'
import { NextPage } from 'next'
import { wrapper } from '@/redux/store/store'

const CartPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Base | Cart</title>
        <meta name="description" content="Base | Cart Page" />
      </Head>
      <Cart />
    </>
  )
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
