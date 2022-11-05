/* функция для оформления заказа и получения URL-адреса покупки */

import { AxiosResponse } from 'axios'
import { newCheckoutType } from '../types/Checkout.model'
import { publicRequest } from 'requests'
import { setError } from 'redux/slices/cart'

export const newCheckout: newCheckoutType = async (idemp, dispatch, order) => {
  try {
    const key = idemp
    const request = { key, ...order }
    const res = await publicRequest
      .post('/orders/', request)
      .then((response: AxiosResponse<string>) => response)
      .catch((err) => {
        dispatch(setError(err.response.data.message))
        return err
      })
    return res.data.confirmation.confirmation_url
      ? res.data.confirmation.confirmation_url
      : res.response.data.message
  } catch (error) {}
}
