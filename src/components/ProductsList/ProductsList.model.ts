import { ProductDataType, ProductsArrayType } from '../GlobalTypes.model'

export type filtersType = {
  color: string
  size: string
  gender: string
  categories: string
}

export interface ProductsProps {
  className?: string
  filters?: filtersType
  category?: string
  products: ProductsArrayType
  HomePage: boolean
  status: string
}

export type itemFilterType = {
  [key: string]: string
}

export interface ProductProps {
  item: ProductDataType
}
