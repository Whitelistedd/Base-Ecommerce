import { AppDispatchType } from 'redux/store/store'
import { CartInitialState } from 'redux/slices/slice.model'
import { CartProductType } from 'features/Cart/types/Cart.model'

export interface CheckoutProps {
  cart: CartInitialState
  shipping: number
}

export interface FormProps {
  cart: CartInitialState
  setShipping: (number: number) => void
}

export interface CheckoutProductProps {
  item: CartProductType
}

export type InfoType = {
  address: {
    address: string
    zipCode: string
    city: string
    country: string
    apartment: string
  }
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  shippingMethod: string
}

export type onSubmitType = (Info: InfoType) => void

export type newCheckoutType = (
  idemp: string,
  dispatch: AppDispatchType,
  order: {
    products: CartProductType[]
    address: {
      address: string
      zipCode: string
      city: string
      country: string
      apartment: string
    }
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    shippingMethod: string
  }
) => unknown
