import { ProductsArrayType, filtersType } from 'types/GlobalTypes.model'

export type getProductsListResult = {
  page: number
  products: ProductsArrayType
  totalPages: number
}

export type getProductsListType = (
  page: number,
  filters: filtersType
) => Promise<getProductsListResult>
