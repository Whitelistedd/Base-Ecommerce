/* функция для оформления заказа и получения URL-адреса покупки */

import { BASE_URL, publicRequest } from '@/requests'

import { AxiosResponse } from 'axios'
import axios from 'axios'
import axiosRetry from 'axios-retry'
import { newCheckoutType } from '../types/Checkout.model'
import { setError } from '@/redux/slices/cart'
import { v4 as uuidv4 } from 'uuid'

export const newCheckout: newCheckoutType = async (
  idemp,
  dispatch,
  user,
  order
) => {
  try {
    const request = { info: { key: idemp, ...order }, user }
    (request, 'w')
    const client = axios.create({
      baseURL: BASE_URL,
    })
    axiosRetry(client, {
      retries: 5,
      retryDelay: () => 500,
      retryCondition: () => true,
    })
    const res = await client
      .post('/orders/', request)
      .then((response: AxiosResponse<string>) => response)
      .catch((err) => {
        dispatch(setError(err.response.data.message))
        return err
      })
    return res.data ? res.data : res.response.data.message
  } catch (error) {}
}
