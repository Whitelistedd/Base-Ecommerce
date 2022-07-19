import { ProductDataType } from '../GlobalTypes.model'

export type handleQuantityType = string

export type handleProductTypeType = React.ChangeEvent<HTMLInputElement>

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
