import { ProductsArrayType } from 'GlobalTypes/GlobalTypes.model'
import { getAllProducts } from '../api/getProductsList'
import { useQuery } from 'react-query'

export const useProductsList = (products: ProductsArrayType) => {
  return useQuery<ProductsArrayType, Error>(['products'], getAllProducts, {
    initialData: products && products.length === 0 ? undefined : products,
  })
}
