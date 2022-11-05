import { ProductsArrayType, filtersType } from 'GlobalTypes/GlobalTypes.model'

export interface ProductsProps {
  className?: string
  filters?: filtersType
  category?: string
  products: ProductsArrayType
  HomePage: boolean
  status: string
}
