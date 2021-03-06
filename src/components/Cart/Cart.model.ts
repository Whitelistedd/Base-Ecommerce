import { AllColors, AllSizes } from '../GlobalTypes.model'

export type CartProductType = {
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

export type handleQuantityType = (index: number, changer: string) => void

export type handleRemoveProductType = (
  index: number,
  item: CartProductType
) => void
export interface CartProductProps {
  item: CartProductType
  index: number
  handlequantity: handleQuantityType
  handleRemoveProduct: handleRemoveProductType
}
