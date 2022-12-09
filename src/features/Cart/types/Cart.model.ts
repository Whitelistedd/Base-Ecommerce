import { AllColors, AllSizes } from '@/types/GlobalTypes.model'

import { AppDispatchType } from '@/redux/store/store'

export type CartProductType = {
  _v: number
  _id: string
  categories: Array<string>
  color: string
  createdAt: string
  desc: string
  gender: Array<string>
  img: Array<string>
  inStock: number
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

export type UpdateProductsType = (
  products: CartProductType[],
  dispatch: AppDispatchType
) => void
