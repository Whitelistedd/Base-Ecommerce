import { CartProductType } from '../../components/Cart/Cart.model'

export interface CartInitialState {
  products: CartProductType[]
  quantity: number
  total: number
  OrderError: string
}

export interface UserInitialState {
  currentUser: string | null
  isFetching: boolean
  error: boolean
  Success: boolean
  confirmationURL: string | null
}
