import { ProductsArrayType } from 'types/GlobalTypes.model'

export type getProductsListResult = {
  page: number
  products: ProductsArrayType
  totalPages: number
}

export type getProductsListType = (
  page: number
) => Promise<getProductsListResult>
