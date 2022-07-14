import { CartProductType } from '../components/Cart/Cart.model'
import { AppDispatchType } from '../redux/store/store'

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

export type UpdateProductsType = (
  products: CartProductType[],
  dispatch: AppDispatchType
) => void
