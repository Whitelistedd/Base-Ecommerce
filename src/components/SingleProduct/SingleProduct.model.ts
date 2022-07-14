import { ProductDataType } from '../GlobalTypes.model'

export type handleQuantityType = string

export type handleProductTypeType = React.ChangeEvent<HTMLInputElement>

export interface ProductTypeState {
  color: string
  size: string
}

export interface ProductFormProps {
  productInfo: ProductDataType
  productType: ProductTypeState
  handleCart: () => void
  error: boolean
  handleProductType: (event: handleProductTypeType) => void
  handleQuantity: (type: string) => void
  quantity: number
}

export interface ProductProps {
  product: ProductDataType
}

export interface ProductQueryResult {
  product: ProductDataType
}
