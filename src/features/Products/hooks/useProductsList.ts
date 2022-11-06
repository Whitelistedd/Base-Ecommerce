import { ProductsArrayType } from 'types/GlobalTypes.model'
import { getAllProducts } from '../api/getProductsList'
import { getProductsListResult } from '../types/getProductsList'
import { useQuery } from 'react-query'

export const useProductsList = (
  products: getProductsListResult,
  page: number
) => {
  return useQuery<getProductsListResult, Error>(['products', page], {
    queryFn: () => getAllProducts(page),
    initialData: products ? undefined : products,
  })
}
