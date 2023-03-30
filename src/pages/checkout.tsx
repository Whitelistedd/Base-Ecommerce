import { devices } from '@/data/MediaQueries'
import { Checkout } from '@/features/Checkout'
import { Form } from '@/features/Checkout/components/Form'
import { setError } from '@/redux/slices/cart'
import { AppDispatch, useAppSelector } from '@/redux/store/store'
import { Alert, Snackbar } from '@mui/material'
import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

const CheckoutPage: NextPage = () => {
  const cart = useAppSelector((state) => state.cart)
  const [shipping, setShipping] = useState(500)
  const [snackBarStatus, setSnackBarStatus] = useState(false)
  const dispatch = AppDispatch()
  const cartquantity = cart.quantity
  const Error = cart.OrderError

  const router = useRouter()

  /* функция для отображения сообщения об ошибке оформления заказа */
  const handleSnackBarClose = () => {
    setSnackBarStatus(false)
    dispatch(setError(''))
  }

  useEffect(() => {
    if (Error) {
      setSnackBarStatus(true)
    }
  }, [Error])

  /* если у пользователя нет товаров, он будет перенаправлен на домашнюю страницу */
  useEffect(() => {
    if (cartquantity === 0) {
      router.replace('/')
    }
  }, [cartquantity])

  return (
    <Container>
      <Head>
        <title>Base | Checkout</title>
        <meta name="description" content="Base | Checkout Page" />
      </Head>
      {/* сообщение об ошибке автоматически закроется через 6 секунд */}
      <Snackbar
        open={snackBarStatus}
        autoHideDuration={6000}
        onClose={handleSnackBarClose}
      >
        <Alert
          onClose={handleSnackBarClose}
          severity="error"
          sx={{ width: '100%' }}
        >
          {Error}
        </Alert>
      </Snackbar>
      <Left>
        <Form setShipping={setShipping} cart={cart} />
      </Left>
      <Checkout shipping={shipping} cart={cart} />
    </Container>
  )
}

const Left = styled.div`
  display: flex;
  padding-top: 4em;
  padding-right: 4em;
  width: 100%;
  flex-direction: column;
  flex: 1.3;
  align-items: flex-end;
  border-right: 1px solid #e1e1e1;
`

const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  margin-bottom: -50px;
  @media only screen and (max-width: ${devices.Laptop}px) {
    flex-direction: column-reverse;
    gap: 2em;
    ${Left} {
      align-items: center;
      padding-right: 0em;
    }
  }
`

export default CheckoutPage
