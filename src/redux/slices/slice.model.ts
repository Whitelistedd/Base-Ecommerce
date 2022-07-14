import { AllColors, AllSizes } from '../../components/GlobalTypes.model'

type CartProductDataType = {
  _v: number
  _id: string
  categories: Array<string>
  color: Array<AllColors>
  createdAt: string
  desc: string
  gender: Array<string>
  img: Array<string>
  inStock: boolean
  price: number
  size: Array<AllSizes>
  title: string
  updatedAt: string
  quantity: number
}

export interface CartInitialState {
  products: CartProductDataType[]
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
