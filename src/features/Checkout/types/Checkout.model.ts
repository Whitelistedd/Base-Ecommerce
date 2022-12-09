import { AppDispatchType } from '@/redux/store/store'
import { CartInitialState } from '@/redux/slices/slice.model'
import { CartProductType } from '@/features/Cart/types/Cart.model'
import { UserProfile } from '@auth0/nextjs-auth0'
import { UserProps } from '@auth0/nextjs-auth0/dist/frontend/with-page-auth-required'

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
  saveInfo: boolean
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
  user: UserProfile | undefined,
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
