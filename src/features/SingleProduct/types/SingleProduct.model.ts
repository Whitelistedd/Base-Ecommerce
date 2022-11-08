import { ProductDataType } from 'types/GlobalTypes.model'

export type handleQuantityType = string

export type handleProductTypeType = (value: string, name: string) => void

export interface ProductTypeState {
  color: string
  size: string
}

export interface ProductFormProps {
  productInfo: ProductDataType
}

export interface ProductProps {
  product: ProductDataType
}

export interface ProductQueryResult {
  product: ProductDataType
}
